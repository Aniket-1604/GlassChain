"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="z-50">
        {/* Header Section */}
        <div className="flex justify-center items-center mt-20">
          <Image src={"/industry.png"} width={350} height={250} alt="Industry Logo" />
        </div>
        <div className="py-5 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
            Introducing GlassChain
          </h1>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-black">
            Connecting Transparency with Durability
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            A revolutionary platform that bridges the gap between suppliers, manufacturers, retailers, and customers, ensuring seamless integration, transparency, and innovation throughout the entire Gorilla Glass supply chain.
          </p>
        </div>
        <h4 className="text-center text-black font-semibold text-xl">Click On The Entities To View Their AAS(Asset Administration Shell)</h4>
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
          {/* Supplier Card */}
          <Link href="https://industry-4o9k.onrender.com/suppliers">
            <div className="card">
              <img src="/1.png" alt="Supplier" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">Supplier</h2>
                <p className="card-description">
                  The Supplier is responsible for manufacturing or sourcing Gorilla Glass and ensuring its delivery to OEM Manufacturers. They process incoming orders and prepare the Gorilla Glass for secure shipping.
                </p>
              </div>
            </div>
          </Link>

          {/* OEM Manufacturer Card */}
          <Link href="https://industry-4o9k.onrender.com/oem_manufacturers">
            <div className="card">
              <img src="/2.png" alt="OEM Manufacturer" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">OEM Manufacturer</h2>
                <p className="card-description">
                  The OEM Manufacturer integrates Gorilla Glass into finished products, ensuring quality and compatibility. They assemble the products and send them to retailers for customer distribution.
                </p>
              </div>
            </div>
          </Link>

          {/* Retailer Card */}
          <Link href="https://industry-4o9k.onrender.com/retailers">
            <div className="card">
              <img src="/3.png" alt="Retailer" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">Retailer</h2>
                <p className="card-description">
                  Retailers act as intermediaries, distributing finished products and collecting feedback. They ensure customer satisfaction and relay feedback for product improvement.
                </p>
              </div>
            </div>
          </Link>

          {/* Product Card */}
          <Link href="https://industry-4o9k.onrender.com/products">
            <div className="card">
              <img src="/4.png" alt="Product" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">Product</h2>
                <p className="card-description">
                  The Product is the finished item incorporating Gorilla Glass. Its attributes like durability and performance are tracked for warranty and usage insights.
                </p>
              </div>
            </div>
          </Link>

          {/* Gorilla Glass Card */}
          <Link href="https://industry-4o9k.onrender.com/gorilla_glasses">
            <div className="card">
              <img src="/5.png" alt="Gorilla Glass" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">Gorilla Glass</h2>
                <p className="card-description">
                  Gorilla Glass is durable and scratch-resistant. It undergoes quality checks to ensure it meets performance standards and contributes to product durability and aesthetics.
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://industry-4o9k.onrender.com/customers">
            <div className="card">
              <img src="/4.png" alt="Product" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">Customer</h2>
                <p className="card-description">
                The Customer is the end-user of the finished product containing Gorilla Glass. Their role involves using the product and providing valuable feedback about its quality and durability. 
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* TailwindCSS Styling */}
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          background-color: white;
          width: 100%;
          max-width: 300px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 8px rgba(0, 128, 0, 0.5);
        }

        .card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-content {
          padding: 16px;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 8px;
        }

        .card-description {
          font-size: 1rem;
          color: #555;
        }

        @media (min-width: 640px) {
          .card {
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .card {
            flex-direction: column;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
