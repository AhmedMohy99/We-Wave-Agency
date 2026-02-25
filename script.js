<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact | We-Wave-Agency</title>

  <link rel="stylesheet" href="style.css" />

  <!-- Google Analytics (GA4) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4WS40NWHK"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-X4WS40NWHK');
  </script>
</head>

<body>

<header>
  <img src="logo.jpg" class="logo" alt="We-Wave-Agency Logo" />
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>

<section style="padding:150px 40px;text-align:center;">
  <h1>Start Your Project</h1>

  <form action="https://formspree.io/f/mlgwabbk" method="POST" style="max-width:520px;margin:30px auto 0;">
    <input type="hidden" name="_subject" value="New Project Request - We-Wave-Agency">
    <input type="hidden" name="_captcha" value="false">

    <input type="text" name="name" placeholder="Full Name" required style="width:100%;padding:14px;margin-bottom:14px;">
    <input type="email" name="email" placeholder="Email Address" required style="width:100%;padding:14px;margin-bottom:14px;">
    <input type="text" name="company" placeholder="Company Name (optional)" style="width:100%;padding:14px;margin-bottom:14px;">

    <textarea name="message" placeholder="Project Details" required style="width:100%;padding:14px;height:140px;margin-bottom:18px;"></textarea>

    <button type="submit" class="btn" style="border:none;cursor:pointer;">Send</button>
  </form>

  <p style="margin-top:40px;line-height:1.8;">
    Email: Wewave111@gmail.com<br>
    Phone: +20 1117230557
  </p>
</section>

<script src="script.js"></script>
</body>
</html>
