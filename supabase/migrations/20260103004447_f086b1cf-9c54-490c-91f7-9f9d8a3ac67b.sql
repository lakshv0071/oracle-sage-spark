-- Create blogs table for storing blog posts
CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  category TEXT,
  author TEXT DEFAULT 'DBA Experts Team',
  featured_image TEXT,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published blogs
CREATE POLICY "Anyone can view published blogs" 
ON public.blogs 
FOR SELECT 
USING (is_published = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blogs_updated_at
BEFORE UPDATE ON public.blogs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample blog posts
INSERT INTO public.blogs (title, slug, excerpt, content, category, author, is_published, published_at) VALUES
('The Future of Database Performance Optimization', 'future-database-performance-optimization', 'Explore cutting-edge techniques for optimizing database performance in modern enterprise environments.', 'Database performance optimization continues to evolve with new technologies and methodologies. In this comprehensive guide, we explore the latest trends and best practices for ensuring your databases run at peak efficiency.', 'Database', 'John Smith', true, now()),
('Cloud Migration: A Step-by-Step Guide', 'cloud-migration-step-by-step-guide', 'Learn how to successfully migrate your on-premise infrastructure to the cloud with minimal disruption.', 'Cloud migration is a critical journey for modern enterprises. This guide walks you through each phase of the migration process, from planning to execution and optimization.', 'Cloud', 'Sarah Johnson', true, now() - interval '2 days'),
('AI-Powered Database Management: What You Need to Know', 'ai-powered-database-management', 'Discover how artificial intelligence is transforming database administration and management practices.', 'Artificial intelligence is revolutionizing how we manage and optimize databases. Learn about the latest AI tools and techniques that are helping DBAs work smarter, not harder.', 'AI & Automation', 'Michael Chen', true, now() - interval '5 days'),
('DevOps Best Practices for Database Teams', 'devops-best-practices-database-teams', 'Implementing DevOps culture and practices within database administration teams for better collaboration.', 'DevOps practices are essential for modern database teams. This article covers the key principles and tools that can help your team deliver faster and more reliably.', 'DevOps', 'Emily Davis', true, now() - interval '7 days'),
('Oracle 23c: New Features Every DBA Should Know', 'oracle-23c-new-features', 'A comprehensive overview of the most important new features in Oracle Database 23c for database administrators.', 'Oracle Database 23c introduces numerous enhancements that can benefit your organization. We break down the most impactful features and how to leverage them effectively.', 'Database', 'Robert Wilson', true, now() - interval '10 days'),
('Building Resilient PostgreSQL Architectures', 'building-resilient-postgresql-architectures', 'Learn how to design and implement highly available PostgreSQL database architectures for enterprise workloads.', 'PostgreSQL has become a go-to choice for enterprise applications. This guide covers the architectural patterns and tools needed to build resilient, highly available PostgreSQL deployments.', 'Database', 'Lisa Thompson', true, now() - interval '14 days');