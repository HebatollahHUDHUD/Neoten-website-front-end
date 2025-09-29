import { Base64ToFile } from "./Base64ToFile";

export const downloadPdf = (pdf: string) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `${timestamp}.pdf`;

  const file = Base64ToFile(pdf);
  const link = document.createElement("a");

  link.href = file;
  link.download = filename;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();

  // Cleanup
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }, 100);
};
