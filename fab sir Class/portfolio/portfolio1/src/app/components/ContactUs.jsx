import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTicketAlt } from "react-icons/fa";
import CommonButton from "./CommonButton";

export default function ContactUs() {
  return (
    <>
      <div className="py-24 px-8 text-center" id="Contact">
        <h1 className="  text-[16px] font-bold   text-primary">Get in Touch</h1>
        <h1 className="main_heading_h1 pt-2  pb-4">Contact Us</h1>
        <p className="main_text_p w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          Ready to get started? Feel free to reach out through the contact form,
          and let's embark on a journey of innovation and success.
        </p>

        <div className="mt-8">
          <div className="shadow border   border-solid border-gray-300 rounded-xl p-4">
            <div className="flex gap-4 md:gap-8 lg:gap-16 xl:gap-24 flex-wrap flex-col md:flex-row ">
              <div className="flex-[0.4] p-16 bg-primary text-white rounded-xl text-left">
                <h1 className=" font-bold leading-[1.1] text-[36px]">
                  Contact Information
                </h1>
                <p className="text-secondary text-[16px] mb-8 mt-4">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
                <div>
                  <div className="flex gap-4 flex-nowrap items-center mb-4">
                    <FaPhoneAlt className="text-[24px]" />{" "}
                    <span className="font-semibold text-[20px]">
                      +1(424) 535 3523
                    </span>
                  </div>
                  <div className="flex gap-4 flex-nowrap items-center mb-4">
                    <IoMdMail className="text-[24px]" />{" "}
                    <span className="font-semibold text-[20px]">
                      hello@mail.com
                    </span>
                  </div>
                  <div className="flex gap-4 flex-nowrap items-center">
                    <FaTicketAlt className="text-[24px]" />{" "}
                    <span className="font-semibold text-[20px]">
                      Open Support Ticket
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-[0.6] text-left p-2 flex flex-col gap-2">
                <div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 flex-col md:flex-row  ">
                    <div className="flex-1">
                      <label>
                        First Name
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="e.g. Ujjwal"
                          className="contactUsInput"
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      <label>
                        Last Name
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="e.g. Dhungel"
                          className="contactUsInput"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label>
                    Email
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="e.g. ujjwal@gmail.com"
                      className="contactUsInput"
                    />
                  </label>
                </div>
                <div>
                  What are you interested on?
                  <br />
                  <div className="flex gap-2 flex-wrap">
                    <label className="flex gap-2 flex-nowrap items-center">
                      <input
                        type="radio"
                        name="interested"
                        value="Design"
                        id=""
                        placeholder="e.g. ujjwal@gmail.com"
                        className="contactUsInput mt-0"
                      />
                      Design
                    </label>
                    <label className="flex gap-2 flex-nowrap items-center">
                      <input
                        type="radio"
                        name="interested"
                        value="Development"
                        id=""
                        placeholder="e.g. ujjwal@gmail.com"
                        className="contactUsInput mt-0"
                      />
                      Development
                    </label>
                    <label className="flex gap-2 flex-nowrap items-center">
                      <input
                        type="radio"
                        name="interested"
                        value="Support"
                        id=""
                        placeholder="e.g. ujjwal@gmail.com"
                        className="contactUsInput mt-0"
                      />
                      Support
                    </label>
                    <label className="flex gap-2 flex-nowrap items-center">
                      <input
                        type="radio"
                        name="interested"
                        value="Other"
                        id=""
                        placeholder="e.g. ujjwal@gmail.com"
                        className="contactUsInput mt-0"
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div>
                  <label>
                    Your Message
                    <input type="text" name="" id="" />
                    <textarea
                      name=""
                      id=""
                      placeholder="e.g. Give you Message"
                      className="contactUsInput"
                      rows={4}
                    ></textarea>
                  </label>
                </div>
                <div className="text-right mt-4">
                  <CommonButton common_btn_context="send message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
