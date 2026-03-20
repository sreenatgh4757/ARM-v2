/*
  # Create contact_messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, not null) - sender's name
      - `email` (text, not null) - sender's email address
      - `message` (text, not null) - the message content
      - `created_at` (timestamptz, defaults to now()) - timestamp of submission

  2. Security
    - Enable RLS on `contact_messages` table
    - Add INSERT-only policy for anonymous users to submit contact forms
    - No SELECT/UPDATE/DELETE policies — messages are write-only from the client
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (
    length(name) > 0 AND
    length(email) > 0 AND
    length(message) > 0
  );
