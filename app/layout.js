// app/layout.js
export const metadata = {
title: "Ali's Airways",
description: "Fly the skies with Ali's Airways"
};


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<nav style={{ padding: "20px", fontSize: "20px" }}>
<a href="/" style={{ marginRight: "20px" }}>Home</a>
<a href="/about">About Us</a>
</nav>
{children}
</body>
</html>
);
}
