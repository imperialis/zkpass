import "./Blog.css"; 

const Blog = () => {
  return (
    <div className="blog">
      <header className="blog-header">
        <h1>Welcome to the Cocktail Recipe Blog!</h1>
        <p>Explore the history and recipes of cocktails from around the world.</p>
      </header>

      <section className="blog-content">
        <h2>History of Cocktails</h2>
        <p>
          The term "cocktail" is believed to have originated in the early 19th century, though its exact history is somewhat unclear.
          Several theories exist, but the most widely accepted is that the word "cocktail" comes from the French word <i>coquetier</i>, which means "egg cup."
          Legend has it that in New Orleans, a bartender used an egg cup to serve a drink, which eventually became known as a "cocktail."
        </p>
        <p>
          Originally, cocktails were composed of a mixture of spirits, sugar, water, and bitters—a combination known as "The Old Fashioned." Over time,
          bartenders began experimenting with other ingredients, such as fruit juices and syrups, leading to the creation of a wide variety of mixed drinks.
        </p>
        <p>
          In the late 19th and early 20th centuries, cocktails became especially popular in the United States, particularly during the Prohibition era (1920-1933).
          During this time, the production and sale of alcohol were prohibited, but speakeasies (secret bars) flourished, and bartenders found creative ways to disguise
          the taste of poorly made bootleg liquor. This era saw the rise of many classic cocktails, some of which are still enjoyed today.
        </p>
        <p>
          After the end of Prohibition, the cocktail culture continued to evolve, and the 1950s and 1960s marked the golden age of cocktail innovation.
          The introduction of new mixers, spirits, and garnishes helped popularize cocktails worldwide. Today, cocktails are enjoyed globally, and bartenders continue to experiment with new flavors and techniques.
        </p>
        
        <h2>Famous Cocktail Recipes by Continent</h2>

        <h3>North America</h3>
        <h4>Margarita (USA/Mexico)</h4>
        <p>The Margarita is one of the most popular cocktails in North America, known for its tangy flavor and refreshing taste. It is often served in a salt-rimmed glass, with tequila as the base spirit.</p>
        <ul>
          <li>2 oz Tequila</li>
          <li>1 oz Lime Juice</li>
          <li>1 oz Triple Sec</li>
          <li>Salt for rimming the glass</li>
        </ul>
        <p><strong>Instructions:</strong> Shake tequila, lime juice, and triple sec with ice. Strain into a glass rimmed with salt. Serve with a lime wedge.</p>

        <h3>South America</h3>
        <h4>Caipirinha (Brazil)</h4>
        <p>Brazil's national cocktail, the Caipirinha, is made with cachaça, a spirit derived from sugarcane. It is sweet, tart, and refreshing.</p>
        <ul>
          <li>2 oz Cachaça</li>
          <li>1 Lime (cut into wedges)</li>
          <li>2 tsp Sugar</li>
        </ul>
        <p><strong>Instructions:</strong> Muddle lime wedges and sugar in a glass. Fill with ice, add cachaça, and stir. Garnish with a lime wedge.</p>

        <h3>Europe</h3>
        <h4>Negroni (Italy)</h4>
        <p>The Negroni is a famous Italian cocktail that has become a staple of European cocktail culture. It is a simple yet balanced drink made with gin, vermouth rosso, and Campari.</p>
        <ul>
          <li>1 oz Gin</li>
          <li>1 oz Vermouth Rosso</li>
          <li>1 oz Campari</li>
        </ul>
        <p><strong>Instructions:</strong> Stir all ingredients with ice and strain into a glass filled with ice. Garnish with an orange peel.</p>

        <h3>Africa</h3>
        <h4>Amaretto Sour (South Africa)</h4>
        <p>The Amaretto Sour is a sweet and sour drink that blends amaretto liqueur with lemon juice. It is a popular cocktail throughout Africa.</p>
        <ul>
          <li>1.5 oz Amaretto Liqueur</li>
          <li>1 oz Lemon Juice</li>
          <li>0.5 oz Simple Syrup</li>
        </ul>
        <p><strong>Instructions:</strong> Shake all ingredients with ice and strain into a glass. Garnish with a cherry or lemon wedge.</p>

        <h3>Asia</h3>
        <h4>Sake Mojito (Japan)</h4>
        <p>A twist on the classic Mojito, this drink incorporates sake, a Japanese rice wine, instead of rum, creating a unique fusion cocktail.</p>
        <ul>
          <li>1.5 oz Sake</li>
          <li>1 oz Lime Juice</li>
          <li>2 tsp Sugar</li>
          <li>6-8 Mint Leaves</li>
          <li>Club Soda</li>
        </ul>
        <p><strong>Instructions:</strong> Muddle mint leaves and sugar in a glass. Add sake, lime juice, and ice. Top with club soda and garnish with mint sprigs.</p>

        <h3>Australia/Oceania</h3>
        <h4>Melon Ball (Australia)</h4>
        <p>The Melon Ball is a tropical drink that has gained popularity in Australia and Oceania. It’s known for its fruity, refreshing flavor, perfect for a sunny day.</p>
        <ul>
          <li>1 oz Midori Melon Liqueur</li>
          <li>1 oz Vodka</li>
          <li>1 oz Orange Juice</li>
        </ul>
        <p><strong>Instructions:</strong> Mix all ingredients in a shaker with ice. Strain into a glass and garnish with a melon ball or orange slice.</p>
      </section>

      <footer className="blog-footer">
        <p>Enjoy responsibly, and always remember to drink in moderation!</p>
      </footer>
    </div>
  );
};

export default Blog;
