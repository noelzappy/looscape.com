const Announcement = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="md:text-5xl text-5xl font-bold text-center">
        <h1>Looscape is launching soon</h1>
      </div>
      <div className="text-lg text-muted-foreground text-center mt-5">
        Rent digital billboards nationwide. Choose location, ad duration, and
        hosting period for tailored campaigns. Transparent pricing based on
        location and duration. Elevate your brand visibility effortlessly.
      </div>
      <div className="text-lg text-muted-foreground text-center mt-5">
        Provide your email below to get notified when we launch
      </div>
    </div>
  );
};

export default Announcement;
