import Generic from '../generic/generic_page_object';

class Hooks {
  getHook(elementName, page) {
    elementName = Generic.formatLocator(elementName);
    
    switch (page) {
      case 'Amazon':
        return {
          amazon_next_pagination_button: "[class*='s-pagination-item s-pagination-next']",
          chair_depth: '[id="p_n_feature_fourteen_browse-bin-title"]',
          page_one: '["div > div > span > a:nth-child(2)"]',
          page_selected: '[class="s-pagination-item s-pagination-selected"]',
          // page_number: '[aria-label*="Go to page"]',
          next_button: '[class*="s-pagination-item s-pagination-next"]',
          page_button: '[class*="s-pagination-item"]',
          button_selected: '[class="s-pagination-item s-pagination-selected"]',
          previous_page: '[class*="s-pagination-item s-pagination-previous"]',
          hotels: '#app-layer-base > div.uitk-grid.pageWhiteBackground > div.uitk-cell.Storefront-Homepage > div.uitk-spacing.uitk-spacing-padding-block-three.uitk-spacing-padding-inlinestart-two.uitk-spacing-padding-inlineend-two > footer > div > div > ul:nth-child(3) > li > div'
        }[elementName];
        
      default:
        throw new Error(
          'The screen sent as argument from the feature file does not exist in hooks.js'
        );
    }
  }
}
export default new Hooks();
