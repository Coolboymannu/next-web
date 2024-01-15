// next.config.js
module.exports = {
    // Other configurations...
  
    // Enable static HTML export
    async generateStaticParams() {
      // Return an object representing the paths and pages to be exported
      return {
        '/': { page: '/' },
        // Add other pages as needed
      };
    },
  };
  