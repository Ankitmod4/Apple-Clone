import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return ( 
    <Carousel className="rounded-xl mt-6"> 
      <img
        src="https://is1-ssl.mzstatic.com/image/thumb/SCG2BRdS-gXePqsduWlMmQ/1960x1102.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
          <img
              src="https://is1-ssl.mzstatic.com/image/thumb/h35-1VMy-HmXA9voJRCO2Q/1960x1102.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
          <img
              src="https://is1-ssl.mzstatic.com/image/thumb/p-dFQhrrenz0eg8_smgu9w/1960x1102.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
          <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/95/7f/ab/957fabae-88d1-44ac-4563-99a2031940b9/495c4f92-6599-4726-9a25-28f82a134274.png/1960x1102.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
          <img
              src="https://is1-ssl.mzstatic.com/image/thumb/HSjOs_VTJ_uAISX2LShxeA/1960x1102.jpg"
        alt="image 5"
        className="h-full w-full object-cover"
      />
          
      
    </Carousel>
  );
}