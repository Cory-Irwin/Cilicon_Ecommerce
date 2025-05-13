import Footer from '../../Components/Footer/Footer'
import Categories from '../../Components/Categories/Categories'
import Header from '../../Components/Header/Header'
import BlackFriday from '../../Components/BlackFriday/BlackFriday'

const faqPage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <main className="mx-auto max-w-screen-xl my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <section>
            <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

            <div className="space-y-6">
              <div className="border p-4 rounded-md">
                <h2 className="font-semibold text-lg">What is your return policy?</h2>
                <p className="text-gray-700 mt-2">
                  We offer a 30-day return policy on all items. Items must be in original condition.
                </p>
              </div>

              <div className="border p-4 rounded-md">
                <h2 className="font-semibold text-lg">How long does shipping take?</h2>
                <p className="text-gray-700 mt-2">
                  Shipping usually takes 5-7 business days, depending on your location.
                </p>
              </div>

              <div className="border p-4 rounded-md">
                <h2 className="font-semibold text-lg">Can I change my order?</h2>
                <p className="text-gray-700 mt-2">
                  You can modify your order within 24 hours by contacting our support team.
                </p>
              </div>

              <div className="border p-4 rounded-md">
                <h2 className="font-semibold text-lg">Do you offer international shipping?</h2>
                <p className="text-gray-700 mt-2">
                  Yes, we ship worldwide. Shipping fees may vary based on location.
                </p>
              </div>

              <div className="border p-4 rounded-md">
                <h2 className="font-semibold text-lg">How do I track my order?</h2>
                <p className="text-gray-700 mt-2">
                  After your order is shipped, you'll receive a tracking number via email.
                </p>
              </div>
            </div>
          </section>

          {/* Support Form */}
          <aside className="bg-amber-100 p-6 rounded-md h-fit">
            <h2 className="text-2xl font-semibold mb-4">Can't find your answer?</h2>
            <p className="mb-6 text-gray-800">
              Our friendly team is happy to help. Send us your question and we’ll get back to you within 2 business days.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="question" className="block text-sm font-medium mb-1">Your Question</label>
                <textarea
                  id="question"
                  rows={4}
                  placeholder="Type your question here..."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
              >
                Send Message →
              </button>
            </form>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default faqPage
