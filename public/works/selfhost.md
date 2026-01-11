## Apollo - My (mini) homelab

On a sudden embark for self ownership and minimalism, I had decieded to ditch all and the content streaming apps 
I own and attempt to self host all the services I need myself!

Thus Apollo was born...

#### Specifications

Its a small headless machine with parts from my old computers glued together.
Apparently I had to get a AMD-V supporting processor to get virtualization suppport and
had to ditch my old i3 processor :(

It does not run a graphic card as AMD 5600X has enough power to boot up,
Nothing powerful for storage as of now and exists with a 2TB Barracuda HDD.

#### Infrastructure

- Runs Proxmox VE as the base hypervisor to manage any services that are hosted
- Most of the external user facing services run as Linux containers in isolation
- Internal facing services (as of now 0 exists) will be run on VM based on requirements

#### Networking

- A dedicated Nginx LXC acts as an ingress to any request! (Including the one you sent to reach this site)
- Nginx is where SSL terminates and reverse proxying happens to all internally hosted services
- Connection from Nginx to Cloudflare (my DNS person) happens via a Cloudflare tunnel as I could not 
offer a static IP and take in headaches for firewalls and other configurations.

![.Homelab diagram](./works/resources/Apollo.svg)

#### Live services I have

- A blackjack multiplayer game
- My portfolio site which you are in now

> << More to come... >>

