import awesomeAroma from "../../../../assets/images/icons/1.png";
import highQuality from "../../../../assets/images/icons/2.png";
import pureGrades from "../../../../assets/images/icons/3.png";
import properRoasting from "../../../../assets/images/icons/4.png";
const Features = () => {
  return (
    <div className=" bg-primary-4">
      <div className="flex justify-center py-20 gap-5 max-w-7xl mx-auto">
        <div>
          <img src={awesomeAroma} alt="" />
          <h1 className="font-rancho text-4xl font-semibold">Awesome Aroma</h1>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div>
          <img src={highQuality} alt="" />
          <h1 className="font-rancho text-4xl font-semibold">High Quality</h1>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>

        <div>
          <img src={pureGrades} alt="" />
          <h1 className="font-rancho text-4xl font-semibold">Pure Grades</h1>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>

        <div>
          <img src={properRoasting} alt="" />
          <h1 className="font-rancho text-4xl font-semibold">
            Proper Roasting
          </h1>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
