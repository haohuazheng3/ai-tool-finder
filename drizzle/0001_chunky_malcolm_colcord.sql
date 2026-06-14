CREATE TABLE IF NOT EXISTS "stripe_events" (
	"id" text PRIMARY KEY NOT NULL,
	"type" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
