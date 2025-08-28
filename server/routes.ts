import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriptionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = insertEmailSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await storage.getEmailSubscription(email);
      if (existingSubscription) {
        return res.status(409).json({ 
          message: "Email already subscribed",
          error: "ALREADY_SUBSCRIBED"
        });
      }

      // Create new subscription
      const subscription = await storage.createEmailSubscription({ email });
      
      res.status(201).json({
        message: "Successfully subscribed to early access",
        subscription: {
          email: subscription.email,
          subscribedAt: subscription.subscribedAt
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid email format",
          error: "VALIDATION_ERROR",
          details: error.errors
        });
      }
      
      console.error("Subscription error:", error);
      res.status(500).json({
        message: "Internal server error",
        error: "SERVER_ERROR"
      });
    }
  });

  // Get all subscriptions (for admin use)
  app.get("/api/subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getAllEmailSubscriptions();
      res.json({
        count: subscriptions.length,
        subscriptions: subscriptions.map(sub => ({
          email: sub.email,
          subscribedAt: sub.subscribedAt
        }))
      });
    } catch (error) {
      console.error("Get subscriptions error:", error);
      res.status(500).json({
        message: "Internal server error",
        error: "SERVER_ERROR"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
