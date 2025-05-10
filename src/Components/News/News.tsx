import React from "react";
import News1 from "../../assets/news/newsss.svg";
import News2 from "../../assets/news/unsplash_6MNmDi1hc_Y.svg";
import News3 from "../../assets/news/unsplash_FO7JIlwjOtU.svg";
import NewsComponent from "../News/NewsComponent";
export const News = () => {
  return (
    <div className="bg-gray-200 p-12">
    <div className="mx-auto max-w-screen-xl my-20 px-4">
      <div className="flex gap-6 flex-row">
        <NewsComponent
          imgurl={News1}
          name="Adrian"
          date="1/12/2026"
          comments="529"
          title="Site-Wide Cart Upgrade Cuts Abandoned Orders by 27% in First Week"
          description="After months of customer feedback and UX testing, ShopDropper has rolled out its biggest cart update yet — and the numbers are already speaking. The new sticky cart feature, now live on both desktop and mobile, allows users to view, modify, and even save items from any page without needing to jump to checkout. The feature also comes with real-time stock alerts and a simplified “quick buy” option that skips redundant shipping steps for repeat customers.

Since launch, the company has seen a 27% decrease in cart abandonment and a noticeable boost in average order value. “We’re seeing people build carts more confidently and check out faster,” said UX lead Anna Carmichael. “It’s not just about aesthetics — it’s about flow.”

Further tweaks are planned in the coming weeks, including social share links for wishlists and one-click upsell bundles. The dev team hinted at an AI-powered cart assistant in early testing. "
        />
        <NewsComponent
          imgurl={News2}
          name="Adrian"
          date="1/12/2026"
          comments="529"
          title="Night Mode Activated: ShopDropper Introduces After-Hours Shopping Theme + Bonus Perks"
          description="In a surprise UX update aimed at night owls and low-light users, ShopDropper has launched an official Night Mode interface — a sleek, eye-comforting theme now live across all account pages and product listings. But this isn’t just a cosmetic change: shoppers browsing after 9pm (in their local timezone) are automatically granted access to limited-time "
        />
        <NewsComponent
          imgurl={News3}
          name="Adrian"
          date="1/12/2026"
          comments="529"
          title="Warehouse AI Update Slashes Return Times, Increases Package Accuracy"
          description="ShopDropper’s logistics wing is celebrating a major milestone this week after deploying a new AI system across its three main fulfillment hubs. Powered by neural sorters and machine-vision scanners, the updated system has reportedly reduced return-processing time by 42% and dropped mis-shipments to an all-time low of just 0.3%.

“Before, an incorrectly scanned item might sit for days,” explained CTO Marla Singh. “Now we’re catching those issues in real-time, before the box is even sealed.”

This update has a direct benefit for customers: faster refunds, more accurate orders, and improved restock speed for in-demand items. The system also logs packaging errors automatically, helping to train warehouse staff and reduce manual audit work. Return rate analytics and personalized recommendations are next on the roadmap — so expect smarter product pairings in your inbox soon. "
        />
      </div>
    </div>
    </div>
  );
};
