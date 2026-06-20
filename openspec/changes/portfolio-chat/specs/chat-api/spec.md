# chat-api Specification

## Purpose

Server-side API route that accepts chat messages, retrieves relevant portfolio context via keyword matching, and streams Gemini 2.5 Flash responses. Enforces safety, rate limiting, and locale-aware replies.

## Requirements

### Requirement: Message Processing

The system SHALL accept POST requests at `app/api/chat/route.ts` with body `{ messages: Array<{role, content}>, locale: string }` and extract the latest user message.

#### Scenario: Valid message received

- GIVEN a POST request with a messages array containing user messages
- WHEN the route processes the request
- THEN it extracts the last user message content AND reads `public/portfolio-content.json`

#### Scenario: Empty messages array

- GIVEN a POST request with an empty messages array
- WHEN the route validates the request
- THEN it returns a 400 error with a descriptive message

### Requirement: Context Retrieval

The system MUST perform keyword and section matching against the content JSON to find relevant context for the user's question.

#### Scenario: Project name match

- GIVEN the user asks "Tell me about 7D Compass"
- WHEN keyword matching runs
- THEN all entries tagged with project `7dcompass` are included in context AND project techStack is available

#### Scenario: Tech stack match

- GIVEN the user asks "What React projects do you have?"
- WHEN keyword matching runs
- THEN entries whose `techStack` contains "React" are returned

#### Scenario: No keyword match

- GIVEN the user asks a generic question with no matching keywords
- WHEN keyword matching runs
- THEN a general portfolio summary (name, role, key projects) is returned as context

### Requirement: Streaming Response

The system SHALL stream Gemini 2.5 Flash responses using `streamText` from the Vercel AI SDK with the `@ai-sdk/google` provider.

#### Scenario: Successful stream

- GIVEN a valid request with matched context
- WHEN the route calls `streamText`
- THEN the response is streamed to the client as it arrives AND the model used is `gemini-2.5-flash`

#### Scenario: Gemini API failure

- GIVEN the Gemini API returns an error or times out
- WHEN the route catches the error
- THEN it returns a friendly "try again later" message without exposing error details

### Requirement: Locale Awareness

The system MUST respond in the same language the user writes in. The `locale` field in the request body informs the system prompt language preference.

#### Scenario: Spanish input

- GIVEN the user sends a message in Spanish with `locale: "es"`
- WHEN Cooper generates a response
- THEN the response is in Spanish

#### Scenario: English input

- GIVEN the user sends a message in English with `locale: "en"`
- WHEN Cooper generates a response
- THEN the response is in English

### Requirement: Rate Limiting

The system MUST enforce a simple in-memory rate limit of 10 requests per minute per IP address.

#### Scenario: Under rate limit

- GIVEN an IP has made fewer than 10 requests in the last minute
- WHEN a new request arrives
- THEN the request is processed normally

#### Scenario: Over rate limit

- GIVEN an IP has made 10+ requests in the last minute
- WHEN a new request arrives
- THEN the route returns a 429 response with a friendly retry message

### Requirement: Server-Side Security

The route MUST be server-side only. The API key (`GOOGLE_GENERATIVE_AI_API_KEY`) MUST NEVER be exposed to the client.

#### Scenario: API key not in response

- GIVEN the route processes a request
- WHEN the response is returned
- THEN no environment variables or API keys are included in the response payload

#### Scenario: Env var configuration

- GIVEN the app is deployed on Vercel
- WHEN the route accesses the API key
- THEN it reads from `process.env.GOOGLE_GENERATIVE_AI_API_KEY`
