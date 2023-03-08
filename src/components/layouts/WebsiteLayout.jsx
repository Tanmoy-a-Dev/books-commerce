import Header from '../website/Header';
// import Navbar from '../website/Navbar';
import Footer from '../website/Footer';

export default function WebsitelLayout({ genres, children }) {
  return (
    <div>
      <Header genres={genres} />
      {/* <Navbar genres={genres} /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
