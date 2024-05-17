---
title: 'Fact Track Security - Open Ports'
description: 'Fact Track Server Security '
pubDate: 'Nov 17 2023'
heroImage: '/blog-placeholder-2.jpg'
---

After the first exploit I was curious and checked what ports are opened and, what I found was surprising for a school.

Many Ports were open in the table below are the ports that are open and, their Common Attack, you can check for the full list in this [wesbite](https://dnschecker.org/port-scanner.php?query=facttrack.kleinisd.net&ptype=server)

| Name     | Port  | Open/Closed | Common Attack            |
|----------|-------|-------------|--------------------------|
| FTP      | 20/21 | Open        | FTP Bounce               |
| SSH      | 22    | Open        | SSH Brute Force          |
| Telnet   | 23    | Open        | Telnet Brute Force       |
| RDP      | 3389  | Open        | RDP Brute Force          |
| HTTPS    | 443   | Open        | -                        |
| SMB      | 445   | Open        | SMB exploits             |
| RPC      | 135   | Open        | RPC exploits             |
| NetBIOS  | 139   | Open        | NetBIOS exploits         |
| SNMP     | 161   | Open        | SNMP vulnerabilities     |
| Oracle   | 1521  | Open        | Oracle Database exploits |
| MySQL    | 3306  | Open        | MySQL Database exploits  |
| HTTP Alt | 8080  | Open        | -                        |

This is not very secure, and is very vulnerable to attacks, and information of student ID's, and along with their names, I'll check if one of these ports are Open and working, because I tried sshing into the facttrack server, i got a error, also im telling you every ports are open including minecraft server port? 

**note: this is only for facttrack.kleinisd.net and not for the apex domain**

The server that is running this Web Server is a Windows Based Computer, and it might be Window 10 or Window Server, Since it is Using IIS 10 Version In the Title of the Error Webpage ***IIS 10.0 Detailed Error - 404.0 - Not Found***.They also had Detailed Error still on; Below Is a Picture of the Error Page

![Alt text](/image.png)

On the Error Page is a Physical Path and it Locates to 

```batch
C:\inetpub\wwwroot\mathfluency\public
```

It looks like the website is hosted on folder and if someone gets to ftp inside of the server people can mess things up badly, before I log off, I will Update, if I get more infomation