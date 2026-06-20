# chat-widget Specification

## Purpose

Lazy-loaded client-side chat UI component providing a floating bubble, message panel, input, session persistence, action buttons, and markdown rendering. Mobile-first responsive design.

## Requirements

### Requirement: Floating Bubble

The widget SHALL display a floating chat bubble positioned at bottom-center, offset to avoid overlap with MusicPlayer (bottom-left), ScrollToTop (bottom-right), and ScrollProgress (top).

#### Scenario: Bubble visible on all pages

- GIVEN the user navigates to any page
- WHEN the page loads
- THEN a chat icon bubble is visible at bottom-center AND does not overlap existing floating elements

#### Scenario: Bubble click opens panel

- GIVEN the chat panel is closed
- WHEN the user clicks the bubble
- THEN the chat panel opens AND the bubble changes to a close icon

### Requirement: Responsive Panel Layout

The chat panel MUST be a floating drawer on desktop (>= 768px) and a full-screen overlay on mobile (< 768px).

#### Scenario: Desktop panel

- GIVEN the viewport width is >= 768px
- WHEN the user opens the chat
- THEN a floating panel appears (bottom-center) AND the background remains visible

#### Scenario: Mobile full-screen

- GIVEN the viewport width is < 768px
- WHEN the user opens the chat
- THEN the panel covers the full screen AND a close button is visible at top

### Requirement: Streaming Response Animation

Cooper's responses SHALL appear progressively as tokens arrive from the stream, creating a "live typing" effect. The cursor SHALL blink during streaming.

#### Scenario: Live token rendering

- GIVEN Cooper is generating a response
- WHEN tokens arrive from the stream
- THEN each token renders immediately in the message bubble AND a blinking cursor appears at the end of the text AND the message auto-scrolls to show new content

#### Scenario: Stream complete

- GIVEN all tokens have been received
- WHEN the stream ends
- THEN the blinking cursor disappears AND the complete message is rendered with markdown formatting

### Requirement: Message Animations

Messages SHALL animate into view with a subtle slide-and-fade transition. Chat panel open/close SHALL use a smooth scale-and-fade transition.

#### Scenario: New message entrance

- GIVEN a new message is added (user or Cooper)
- WHEN it appears in the message list
- THEN it slides in from its respective side (user: left, Cooper: right) with a fade AND the animation completes within 200-300ms

#### Scenario: Panel open transition

- GIVEN the user clicks the chat bubble
- WHEN the panel opens
- THEN on desktop: the panel scales up from the bubble position with a fade AND on mobile: the overlay slides up from bottom AND animations respect prefers-reduced-motion

#### Scenario: Panel close transition

- GIVEN the chat panel is open
- WHEN the user closes it
- THEN the panel scales down toward the bubble position with a fade AND completes within 200ms

### Requirement: Sound Effects

The system MAY play subtle sound effects on message events. Sounds MUST be optional and default to muted.

#### Scenario: Message sent sound

- GIVEN the user sends a message
- WHEN the message is dispatched
- THEN a subtle "sent" sound MAY play IF sounds are enabled

#### Scenario: Message received sound

- GIVEN the first token of Cooper's response arrives
- WHEN streaming begins
- THEN a subtle "received" sound MAY play IF sounds are enabled

#### Scenario: Sounds disabled by default

- GIVEN a user opens the chat for the first time
- WHEN the widget loads
- THEN sounds are muted AND a toggle in the chat header allows enabling them AND the preference is stored in sessionStorage

### Requirement: Message Display

The system SHALL display messages in a scrollable list with user messages left-aligned and Cooper messages right-aligned, with markdown rendering (bold, links, code blocks).

#### Scenario: Message history display

- GIVEN the user has sent messages and received responses
- WHEN the chat panel is open
- THEN messages appear in chronological order with correct alignment AND markdown is rendered

#### Scenario: Long message scrolling

- GIVEN the conversation has 20+ messages
- WHEN new messages arrive
- THEN the list auto-scrolls to the bottom AND the user can scroll up to view history

### Requirement: Text Input

The system SHALL provide a text input field and send button at the bottom of the chat panel. The input MUST submit on Enter key or button click.

#### Scenario: Send message

- GIVEN the user types a message in the input
- WHEN they press Enter or click Send
- THEN the message appears in the list AND the input clears AND a typing indicator shows

#### Scenario: Empty input ignored

- GIVEN the input field is empty
- WHEN the user presses Enter or clicks Send
- THEN no message is sent AND no error occurs

### Requirement: Typing Indicator

The system SHALL display a typing indicator (three animated dots) while waiting for Cooper's response.

#### Scenario: Response loading

- GIVEN the user sends a message
- WHEN the API is processing the response
- THEN a typing indicator appears below the last message AND disappears when the response arrives

### Requirement: Session Persistence

The system MUST store message history in `sessionStorage` and restore it on component mount. History clears when the tab closes.

#### Scenario: Restore on navigation

- GIVEN the user has sent messages in the current tab
- WHEN they navigate to another page and return
- THEN the full message history is restored from sessionStorage

#### Scenario: New session

- GIVEN no sessionStorage data exists for the chat
- WHEN the widget mounts
- THEN a random greeting is displayed AND a new session begins

#### Scenario: Tab close

- GIVEN the user closes the browser tab
- WHEN they reopen the portfolio in a new tab
- THEN sessionStorage is empty AND a fresh greeting appears

### Requirement: Action Buttons

Cooper's responses MAY include structured action buttons rendered inline below the message bubble.

#### Scenario: Project mention

- GIVEN Cooper mentions a project name in the response
- WHEN the response is rendered
- THEN a "View Project" button links to `/locale/projects/{id}`

#### Scenario: Contact mention

- GIVEN Cooper mentions contact information
- WHEN the response is rendered
- THEN a "Send Email" button opens a mailto link

#### Scenario: About mention

- GIVEN Cooper references the about section
- WHEN the response is rendered
- THEN an "About Me" button links to the about section

### Requirement: Dynamic Greetings

The system MUST pick a random greeting from a curated bilingual array (5-8 entries) for each new session.

#### Scenario: Random greeting display

- GIVEN a new session starts (no sessionStorage)
- WHEN the widget loads
- THEN a random greeting from the curated array is displayed AND the greeting matches the current locale

### Requirement: Accessibility

The widget MUST be keyboard navigable and include appropriate ARIA labels.

#### Scenario: Keyboard navigation

- GIVEN the chat panel is open
- WHEN the user presses Tab
- THEN focus moves through interactive elements (input, send button, close button) in logical order

#### Scenario: Screen reader support

- GIVEN the widget is rendered in the DOM
- WHEN a screen reader inspects the element
- THEN it announces "Chat widget" on the bubble AND "Chat panel" on the open panel AND message regions have appropriate roles

### Requirement: Reduced Motion

The widget MUST respect `prefers-reduced-motion` media query.

#### Scenario: Reduced motion enabled

- GIVEN the user has `prefers-reduced-motion: reduce` in OS settings
- WHEN the chat panel opens/closes
- THEN animations are disabled or instant AND the typing indicator does not animate
