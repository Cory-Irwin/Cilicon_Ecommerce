
import PaySucceed from "../../../assets/TrackOrderProgress/paysuccessicon.svg";
import OrderActivityComponent from "../../../Pages/shopPages/TrackOrderProgressPage/orderActivityComponent";
import DeliveryMan from "../../../assets/TrackOrderProgress/PersonIcon.svg";
import LastMileHubReached from "../../../assets/TrackOrderProgress/Delivered Icon.svg";
import LastMileHubOnWay from "../../../assets/TrackOrderProgress/Onthewayicon.svg";
import Verified from "../../../assets/TrackOrderProgress/VerifiedIcon.svg";
import Confirmed  from "../../../assets/TrackOrderProgress/ConfirmedIcon.svg";
type orderActivityProps = {
  productState: string;
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
  imgVisual: string;
};

const orderActivityComponent = (props: orderActivityProps) => {
  return (
   <div className="flex flex-col">
        <div className="flex flex-row p-2 gap-2">
          <div>

            <img src={props.imgVisual} alt="" />
          </div>
          <div>
            <h1>{props.productState}</h1>
            <h1>
              {" "}
              {props.dateDay} {props.dateMonth} {props.dateYear} at{" "}
              {props.timeOrdered}{" "}
            </h1>
          </div>
        </div>
      </div>
  )
}

export default orderActivityComponent