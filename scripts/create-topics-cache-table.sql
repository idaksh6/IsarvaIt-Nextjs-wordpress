-- Create table to cache AI-extracted topics
-- This prevents re-analyzing the same conversations, saving API costs

CREATE TABLE IF NOT EXISTS conversation_topics (
  id bigserial PRIMARY KEY,
  conversation_id text UNIQUE NOT NULL,
  topics jsonb NOT NULL,
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);

-- Create index for fast lookups
CREATE INDEX IF NOT EXISTS idx_conversation_topics_conversation_id 
  ON conversation_topics(conversation_id);

-- Add comment
COMMENT ON TABLE conversation_topics IS 'Caches AI-extracted topics from conversations to minimize OpenAI API costs';
