import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="z-50">
        <div className="flex justify-center items-center mt-20">
          <Image src={"/industry.png"} width={350} height={250} alt="" />
        </div>
        <div className="py-5 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
            Introducing GlassChain
          </h1>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-black">
            Connecting Transparency with Durability
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            A revolutionary platform that bridges the gap between suppliers, manufacturers, retailers, and customers, ensuring seamless integration, transparency, and innovation throughout the entire Gorilla Glass supply chain.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {/* First Card */}
          <div
            style={{
              display: "flex",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="/1.png"
                alt="Card Image"
                style={{ width: 300, height: 250, objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 2, padding: "16px" }}>
              <h2 className="font-bold text-black" style={{ marginBottom: "8px", fontSize: "1.5rem" }}>
                Supplier
              </h2>
              <p className="font-semibold text-black" style={{ marginBottom: "16px", fontSize: "1rem" }}>
                The Supplier in the Glass Chain system is responsible for manufacturing or sourcing high-quality Gorilla Glass and ensuring its seamless delivery to OEM Manufacturers. They process incoming orders by verifying details such as quantity, specifications, and delivery requirements, and prepare the Gorilla Glass for secure shipping. The supplier plays a crucial role in maintaining the efficiency and quality of the overall supply chain.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div
            style={{
              display: "flex",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="/2.png"
                alt="Card Image"
                style={{ width: 300, height: 250, objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 2, padding: "16px" }}>
              <h2 className="font-bold text-black" style={{ marginBottom: "8px", fontSize: "1.5rem" }}>
                Product
              </h2>
              <p className="font-semibold text-black" style={{ marginBottom: "16px", fontSize: "1rem" }}>
              The Product is the finished item created by the OEM Manufacturer, incorporating Gorilla Glass into its design. It could range from a smartphone to a display device, where Gorilla Glass enhances the product’s functionality and aesthetics. The Product is assembled using high-quality components and is shipped to Retailers for customer distribution. Its attributes, such as durability and performance, are tracked through integrated data models, allowing for warranty support and usage insights.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div
            style={{
              display: "flex",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="/3.png"
                alt="Card Image"
                style={{ width: 300, height: 250, objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 2, padding: "16px" }}>
              <h2 className="font-bold text-black" style={{ marginBottom: "8px", fontSize: "1.5rem" }}>
              OEM Manufacturer
              </h2>
              <p className="font-semibold text-black" style={{ marginBottom: "16px", fontSize: "1rem" }}>
              The OEM Manufacturer assembles the finished product, integrating Gorilla Glass supplied by the Supplier into devices or components. They manage inventory, ensure smooth operations, and send feedback to the Supplier about the quality and compatibility of the received glass. The manufacturer also oversees the assembly process, ensuring adherence to design specifications, and forwards the finished product to retailers for distribution.
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div
            style={{
              display: "flex",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="/1.png"
                alt="Card Image"
                style={{ width: 300, height: 250, objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 2, padding: "16px" }}>
              <h2 className="font-bold text-black" style={{ marginBottom: "8px", fontSize: "1.5rem" }}>
                Retailer
              </h2>
              <p className="font-semibold text-black" style={{ marginBottom: "16px", fontSize: "1rem" }}>
              The Retailer serves as the intermediary between the OEM Manufacturer and the Customer, distributing finished products and collecting customer feedback. They track product sales, manage customer interactions, and relay feedback regarding the performance of the finished product back to the OEM Manufacturer. This ensures that customer experiences and satisfaction are integrated into the supply chain for ongoing improvements.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="/4.png"
                alt="Card Image"
                style={{ width: 300, height: 250, objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 2, padding: "16px" }}>
              <h2 className="font-bold text-black" style={{ marginBottom: "8px", fontSize: "1.5rem" }}>
                Gorilla Glass
              </h2>
              <p className="font-semibold text-black" style={{ marginBottom: "16px", fontSize: "1rem" }}>
              Gorilla Glass is the key machine part at the center of the supply chain. As a durable and scratch-resistant material, it is manufactured or sourced by the Supplier and integrated into the final product by the OEM Manufacturer. Gorilla Glass undergoes quality assurance checks to ensure it meets performance standards such as clarity, durability, and size specifications. Any feedback regarding defects or issues with the glass is transmitted through the chain, allowing the Supplier to make necessary repairs or replacements.
              </p>
            </div>
          </div>
          {/* Fifth Card */}
          <div
            style={{
              display: "flex",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="/5.png"
                alt="Card Image"
                style={{ width: 300, height: 250, objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 2, padding: "16px" }}>
              <h2 className="font-bold text-black" style={{ marginBottom: "8px", fontSize: "1.5rem" }}>
              Customer
              </h2>
              <p className="font-semibold text-black" style={{ marginBottom: "16px", fontSize: "1rem" }}>
              The Customer is the end-user of the finished product containing Gorilla Glass. Their role involves using the product and providing valuable feedback about its quality, durability, and performance. This feedback is collected by the Retailer and passed up the chain to the OEM Manufacturer and ultimately to the Supplier, ensuring the continuous refinement of the product and addressing any issues for future iterations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
