# Cards Online - Multiplayer Blackjack Platform

## Technical Architecture

**Stack**: TypeScript monorepo with React/Vite client, Express server, Socket.IO for real-time communication, Docker containerization.

**Core Challenge**: Implementing stateful multiplayer game logic with real-time synchronization across distributed clients while maintaining game integrity.

## System Design

### Real-time Communication Layer

Socket.IO manages bidirectional event streams. Server maintains authoritative game state; clients receive state updates via event emissions. Key events: `join_game`, `place_bet`, `hit`, `stand`, `dealer_turn`. Server validates all actions before state mutation and broadcast.

### Game Engine

Server-side services handle deck management (Fisher-Yates shuffling), hand evaluation (Ace soft/hard values, bust detection), dealer AI (hit on 16, stand on 17+), and payout calculation (3:2 blackjack, 1:1 standard wins).

State machine enforces valid transitions: `BETTING → PLAYING → DEALER_TURN → PAYOUT → BETTING`.

### Frontend

React functional components with Material-UI base. Socket.IO client context provides global connection. Storybook enables isolated component development with mock game states.

### Scalability Path

Current in-memory Map storage limits horizontal scaling. Planned Redis migration enables distributed state across multiple server instances, pub/sub for cross-instance events, and session persistence for player reconnection.

Docker Compose orchestrates local development. Production targets container orchestration (Kubernetes/ECS) with Redis cluster.

## Key Technical Decisions

- **Server-authoritative state**: Prevents client-side cheating, validates all actions server-side
- **Event-driven architecture**: Decouples game logic from transport layer
- **TypeScript everywhere**: Type safety across client/server boundary
- **Monorepo structure**: Shared types, independent deployments
