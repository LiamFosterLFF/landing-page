import { Box } from "@mui/material";
import { Testimonial, ITestimonial } from "./Testimonial";
const Testimonials = () => {
  const subtext =
    "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.";
  const testimonialData: ITestimonial[] = [
    {
      name: "Claire Bell",
      profession: "Designer",
      img: "4",
      text: subtext,
    },
    {
      name: "Francisco Lane",
      profession: "Designer",
      img: "5",
      text: subtext,
    },
    {
      name: "Ralph Fisher",
      profession: "Designer",
      img: "6",
      text: subtext,
    },
    {
      name: "Jorge Murphy",
      profession: "Designer",
      img: "7",
      text: subtext,
    },
  ];
  return (
    <Box display="flex">
      {testimonialData.map((testimonialData: ITestimonial) => {
        return <Testimonial {...testimonialData} />;
      })}
    </Box>
  );
};

export default Testimonials;
