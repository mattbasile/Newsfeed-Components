// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
let allPanels =[];
class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent="Expand";
    // // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.handlePanelClick());
    allPanels.push(this);
  }
  handlePanelClick(){
    this.expandArticle(event.currentTarget);
    console.log(event.currentTarget);
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if(this.article.classList.contains("article-open")){
      TweenMax.to(this.article, 2, {className: "-=article-open" });
      this.expandButton.textContent="Expand"
    } else{
      allPanels.forEach(article=>{
        article.CloseArticles();
      })
      TweenMax.to(this.article, 1, {className: "+=article-open" });
      this.expandButton.textContent="Close"
    }
  }
  CloseArticles(){
    TweenMax.to(this.article, 2, {className: "-=article-open" });
    this.expandButton.textContent="Expand"
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const articles = document.querySelectorAll('.article');
articles.forEach( article => {
  return new Article(article);  
});