
import html2pdf from 'html2pdf.js';

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

export const formatDateRange = (startDate: string, endDate: string): string => {
  if (!startDate && !endDate) return '';
  if (!endDate) return `${formatDate(startDate)} - Present`;
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export const generatePDF = (elementId: string, filename: string): void => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error('Element not found');
    return;
  }
  
  const opt = {
    margin:       [0.5, 0.5],
    filename:     `${filename}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  
  html2pdf().set(opt).from(element).save();
};
