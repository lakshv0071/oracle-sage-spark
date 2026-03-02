
-- Fix: The existing INSERT policy is RESTRICTIVE which blocks all inserts.
-- Drop it and recreate as PERMISSIVE.
DROP POLICY IF EXISTS "Anyone can submit registration" ON public.registrations;

CREATE POLICY "Anyone can submit registration"
ON public.registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
