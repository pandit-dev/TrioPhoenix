import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  FileText,
  Settings,
  Smartphone,
  ClipboardList,
  LayoutGrid,
  Globe,
  Users,
  ShoppingBag,
  Video,
  Briefcase,
  ShieldCheck,
  FolderCode,
  MonitorSmartphone,
  ClipboardEdit,
  MailCheck,
  MonitorCheck,
  BarChart4,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting engaging online experiences through custom website development that reflects your brand’s identity.",
    icon: <MonitorSmartphone size={40} />,
  },
  {
    title: "CRM Development",
    description:
      "Improving customer relationships with personalized CRM solutions, simplifying interactions and fostering growth.",
    icon: <Settings size={40} />,
  },
  {
    title: "Software Solutions",
    description:
      "Creating innovative software to streamline operations and boost efficiency in your business.",
    icon: <FolderCode size={40} />,
  },
  {
    title: "App Development",
    description:
      "Bringing your ideas to life with dynamic Android and iOS apps, enhancing user engagement and accessibility.",
    icon: <Smartphone size={40} />,
  },
  {
    title: "Administration Tools",
    description:
      "Managing workflow seamlessly with customized administrative systems tailored to your organization’s needs.",
    icon: <ClipboardList size={40} />,
  },
  {
    title: "Content Writing",
    description:
      "Empowering brands with compelling academic and SEO-friendly content to boost online visibility and authority.",
    icon: <ClipboardEdit size={40} />,
  },
  {
    title: "Logo Design",
    description:
      "Creating memorable brand identities with visually striking logo designs that capture your essence.",
    icon: <LayoutGrid size={40} />,
  },
  {
    title: "Digital Marketing",
    description:
      "Driving brand growth with targeted strategies tailored to amplify your online presence and sales results.",
    icon: <Globe size={40} />,
  },
  {
    title: "Social Media Management",
    description:
      "Designing your brand’s social media strategy for maximum engagement and expansion.",
    icon: <Users size={40} />,
  },
  {
    title: "Email Marketing",
    description:
      "Nurturing customer relationships and driving engagement through personalized email campaigns.",
    icon: <MailCheck size={40} />,
  },
  {
    title: "Online Advertising",
    description:
      "Maximizing your digital reach with strategic ad placements across various platforms.",
    icon: <MonitorCheck size={40} />,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Empowering your online store with seamless shopping experiences and optimized performance.",
    icon: <ShoppingBag size={40} />,
  },
  {
    title: "Content Marketing",
    description:
      "Establishing your brand as an authority through impactful, engaging, and SEO-optimized content.",
    icon: <FileText size={40} />,
  },
  {
    title: "Website Maintenance",
    description:
      "Ensuring your website remains up-to-date, secure, and optimized for peak performance.",
    icon: <Settings size={40} />,
  },
  {
    title: "Video Production",
    description:
      "Creating engaging video content to captivate your audience and enhance your brand’s presence.",
    icon: <Video size={40} />,
  },
  {
    title: "Analytics and Reporting",
    description:
      "Guiding business insights with data-driven strategies to improve digital marketing performance.",
    icon: <BarChart4 size={40} />,
  },
  {
    title: "Online Reputation Management",
    description:
      "Protecting and enhancing your brand’s image with proactive reputation management strategies.",
    icon: <ShieldCheck size={40} />,
  },
  {
    title: "Consulting and Strategy",
    description:
      "Helping you navigate your business growth with expert advice and strategic planning.",
    icon: <Briefcase size={40} />,
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="bg-blue-50 py-16 px-14 rounded-md shadow-sm border border-gray-200 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{scale:1.01, boxShadow:"0px 0px 10px rgb(209, 105, 105)"}}

      transition={{
        duration: 2,        
        type: "spring",
        bounce: 0.6,
      }}
    >
      {service.icon}
      <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
      <p className="text-lg text-gray-600 my-8">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">More Services</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
