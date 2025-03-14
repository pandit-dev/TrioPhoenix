import { useState, useEffect } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const useContactData = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await API.get("/contact/");
      if (response) {
        // console.log(response)
        setContacts(response?.data?.contactMessage);
      }
    } catch (error) {
      toast.error("Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  };  
  return { contacts, loading, contactsCount: contacts.length,};

};

export default useContactData;