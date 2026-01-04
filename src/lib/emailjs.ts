import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_1ao15qf';
const TEMPLATE_ID = 'template_mtxp75f';
const PUBLIC_KEY = 'HusnmuTiYawIUUKkY';

emailjs.init(PUBLIC_KEY);

interface InquiryData {
  type: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  jobTitle?: string;
  service?: string;
  services?: string[];
  date?: string;
  time?: string;
  message?: string;
  companySize?: string;
  timeline?: string;
}

export const sendInquiryEmail = async (data: InquiryData): Promise<boolean> => {
  try {
    // Format the message content
    let messageContent = `📋 Inquiry Type: ${data.type}\n\n`;
    messageContent += `👤 Name: ${data.name}\n`;
    messageContent += `📧 Email: ${data.email}\n`;
    if (data.phone) messageContent += `📞 Phone: ${data.phone}\n`;
    messageContent += `🏢 Company: ${data.company}\n`;
    if (data.jobTitle) messageContent += `💼 Job Title: ${data.jobTitle}\n`;
    if (data.companySize) messageContent += `📊 Company Size: ${data.companySize}\n`;
    if (data.service) messageContent += `🔧 Service: ${data.service}\n`;
    if (data.services && data.services.length > 0) {
      messageContent += `🔧 Services: ${data.services.join(', ')}\n`;
    }
    if (data.date && data.time) {
      messageContent += `📅 Preferred Date/Time: ${data.date} at ${data.time}\n`;
    }
    if (data.timeline) messageContent += `⏰ Timeline: ${data.timeline}\n`;
    if (data.message) messageContent += `\n💬 Message:\n${data.message}`;

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: messageContent,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};
