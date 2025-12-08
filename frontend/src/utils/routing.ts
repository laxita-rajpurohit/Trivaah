// Utility function to convert category names to URL-friendly slugs
export const categoryToSlug = (categoryName: string): string => {
  return categoryName
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove special characters
    .replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Trim hyphens from start
    .replace(/-+$/, ''); // Trim hyphens from end
};

// Utility function to convert slug back to readable category name
export const slugToCategory = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Generate category route path
export const getCategoryPath = (categoryName: string): string => {
  return `/category/${categoryToSlug(categoryName)}`;
};

