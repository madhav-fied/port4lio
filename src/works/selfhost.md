# 🧪 Self-Hosted Homelab

A small but growing homelab where I run real services, expose them safely to the internet, and keep adding new pieces as ideas come up.

---

## 🧱 Infrastructure

* **Proxmox VE** as the base hypervisor
* Services run as isolated **LXC containers**
* Easy to snapshot, replace, and extend

---

## 🌐 Networking & Ingress

* A dedicated **Nginx LXC** acts as the entry point
* SSL termination and reverse proxying live here
* Internet access is via a **Cloudflare Tunnel**

  * No public IPs
  * No router port forwarding

```
Todo: service diagram
Internet → Cloudflare Tunnel → Nginx → Services
```

---

## 🎰 Live Service: Blackjack Simulator

* Runs in its own LXC
* Headless backend with a single exposed port
* Public access routed through Nginx + Cloudflare
* Static LAN port for local access and testing

---

## More things incoming!!