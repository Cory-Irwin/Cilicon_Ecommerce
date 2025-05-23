import ProgressBar from "../../../Pages/shopPages/TrackOrderProgressPage/trackOrderProgressLine";
import OrderActivity from "../TrackOrderProgressPage/orderActivityComponent";
type TrackOrderProps = {
  productHash: string;
  productQuantity: number;
  dateDay: string;
  dateMonth: string;
  dateYear: string;
  timeOrdered?: string;
  totalAmmount?: number;
  orderExpectedDay: number;
  orderExpectedMonth: number;
  orderExpectedYear: number;
};
const TrackOrder = (props: TrackOrderProps) => {
  return (
    <>
      <div className="mx-auto max-w-screen-md my-10 px-4 border-2 border-gray-200">
        <div className="flex flex-col">
          <div>
            <div>
              <h1>#{props.productHash}</h1>
            </div>
          </div>
          <div className="flex text-end justify-end">
            <h1>${props.totalAmmount}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <h1>
                {props.productQuantity} Products • Order placed in{" "}
                {props.dateDay} {props.dateMonth}, {props.dateYear} at{" "}
                {props.timeOrdered}
              </h1>
            </div>
          </div>
        </div>{" "}
        <ProgressBar step={1} />
        <OrderActivity
         imgVisual={""}
          productHash={""}
          timeOrdered="7:32PM"
          productQuantity={0}
          dateDay={"23"}
          dateMonth={"DEC"}
          dateYear={"2025"}
          orderExpectedDay={0}
          orderExpectedMonth={0}
          orderExpectedYear={0}
          productState={
            " Your order has been delivered. Thank you for shopping at Appycon!"
          }
        />
      </div>
    </>
  );
};

export default TrackOrder;
