## Projekt a: `Multiplayer Blackjack Platform`

**Why?** To honor a tradition of playing cards with the boys even when they
flew off to different parts of the world...

#### Libraries Used

- **Client**
    1. `React` and friends for designing all pages,
    1. `Material UI` for few resuable components,
    1. `Storybook` for development in isolation,
    1. `Socket.io client` for talking to the server,
    1. `Pnpm` for package management.

- **Server**
    1. `Express` for HTTP server,
    1. `Socket.io` for persistent connections
    1. `Pnpm` for package management.
    1. `Node`, `Typescript` and friends for platforming

- **Docker** for deploying inside a Linux Container

#### Overview

**1. Room Management & Session Initialization**

> Players create or join game sessions via unique **alphanumeric room codes**. 
> Room codes serve as session identifiers for WebSocket connection grouping and state partitioning.

**2. Lobby State & Game Initialization**
> The lobby functions as a pre-game state where the **host player** (first connection) triggers game start.
> Host maintains elevated privileges for lifecycle management.

**3. Card Distribution & Turn Sequencing**
> Server executes deck shuffling, deals cards to all players, and orchestrates sequential turn assignment 
> with **server-side validation** of all actions (hit, stand, double down).

**4. Dealer Resolution & Round Settlement**
> After player turns complete, server executes dealer AI logic (hit on 16, stand on 17).
> Outcomes are calculated server-side and **broadcast as read-only state updates**.

**5. Post-Round Flow Control**
> Players choose to exit session or continue playing (returns to lobby state).
> Lobby preserves existing roster and room configuration for subsequent rounds.

**6. State Authority & Anti-Cheat Architecture**
> Authoritative game state resides exclusively on server. Clients receive state snapshots via 
> WebSocket and submit server-validated action requests that may be rejected if invalid.

![State Flow](./works/resources/Blackjack.svg)

#### Hosting

- Client and Server are shipped as **separate containers** with only necessary ports exposed on local network.
- HTTP(s) connections are mapped to my homelab setup via **Cloudflare tunnel** to a reverse proxy(Nginx).
- **Nginx reverse proxy** routes the traffic to the respective LXC.
