type DiscountBadgeProps = {
  percentOff?: number;
};

export default function DiscountBadge({ percentOff }: DiscountBadgeProps) {
  if (percentOff === undefined) return null;

  return (
    <div className="absolute bg-yellow-400 border-2
     border-teal-900 w-25 text-center top-2 left-2 p-2">
      <h1>{percentOff}% OFF</h1>
    </div>
  );
}
