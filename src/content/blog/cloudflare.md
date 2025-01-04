---
author: angel
pubDatetime: 2024-12-11T14:00:00Z
modDatetime: 2025-01-03T20:00:00Z
title: How to Set Up a Domain with Cloudflare
featured: true
draft: 
tags:
  - cloudflare
  - Guide
  - domains
description: Setting up your domain on Cloudflare (Porkbun)
---

## Information Before We Start  
You now own a domain but aren’t sure what to do with it. The first step is to add it to Cloudflare. Cloudflare provides a free global [Content Delivery Network (CDN)](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) and [DDoS Protection](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/). I use it to host **sillyangel.xyz** and **sillyangel.fyi**. Additionally, Cloudflare offers free analytics, such as information about who visited your website and their location (only if the traffic is proxied through Cloudflare).  

In this blog, I will be focusing only on setting up Cloudflare for domains purchased through [Porkbun](https://porkbun.com/account/login).  

---

## Cloudflare Setup  

1. **Create a Cloudflare Account**  
   Start by creating a Cloudflare account [here](https://dash.cloudflare.com/). Once you’ve signed up, add your new domain and follow the steps until you reach the nameserver setup screen.  

### Updating Name Servers  

2. **Access Your Porkbun Account**  
   Log in to your Porkbun account where you purchased the domain. Navigate to the domain management panel and click on "Details."  

   ![[panel.png]]  

3. **Edit Name Servers**  
   Update the nameservers provided by Cloudflare. Replace the default nameservers with the ones shown on Cloudflare’s setup screen.  

4. **Wait for DNS Propagation**  
   After updating the nameservers, wait for the DNS to propagate. This process may take a few minutes to several hours.  

Once the DNS propagation is complete, your domain is successfully set up with Cloudflare. 