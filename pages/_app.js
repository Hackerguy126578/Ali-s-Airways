// pages/_app.js
import "../styles/globals.css";


export default function MyApp({ Component, pageProps }) {
return (
<>
<nav style={{ padding: "20px", fontSize: "20px" }}>
<a href="/" style={{ marginRight: "20px" }}>Home</a>
<a href="/about">About Us</a>
</nav>
<Component {...pageProps} />
</>
);
}
