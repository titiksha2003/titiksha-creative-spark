// This is a utility function to download files
export const downloadFile = (filePath: string, fileName?: string) => {
  // Create an anchor element
  const link = document.createElement('a');
  
  // Set the href to the file path
  link.href = filePath;
  
  // Set download attribute to force download instead of navigation
  link.setAttribute('download', fileName || '');
  
  // Append to body
  document.body.appendChild(link);
  
  // Trigger click
  link.click();
  
  // Clean up
  document.body.removeChild(link);
};
