const recipeViewToggle = document.getElementById('recipe-view-toggle');
const recipeLists = document.getElementsByClassName('recipe-list');

function updateRecipeView(view) {
  if (recipeViewToggle) {
    recipeViewToggle.setAttribute('data-view', view);
  }
  if (recipeLists.length) {
    for (var i=0; i < recipeLists.length; i++) {
      recipeLists.item(i).setAttribute('data-view', view);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateRecipeView(localStorage.getItem('recipe-view') ?? 'grid');
});

if (recipeViewToggle) {
  recipeViewToggle.addEventListener('click', () => {
    var view = localStorage.getItem('recipe-view') == 'list' ? 'grid' : 'list';
    localStorage.setItem('recipe-view', view);
    updateRecipeView(view);
  });
}
