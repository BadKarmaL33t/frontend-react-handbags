import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";
import './App.css';

function App() {
  return (
      <>
        <header>
          <h1>Handbags & Purses</h1>
          <nav>
            <Button
                title={"to the collection"}
            >
            </Button>
            <Button
                title={"shop all bags"}
            >
            </Button>
            <Button
                title={"pre-orders"}
            >
            </Button>
          </nav>
        </header>
        <main>
          <Product
              label={"Best seller"}
              img={bag1}
              title={"The handy bag"}
              price={"€400,-"}
          >
          </Product>
          <Product
              label={"Best seller"}
              img={bag2}
              title={"The stylish bag"}
              price={"€250,-"}
          >
          </Product>
          <Product
              label={"New collection"}
              img={bag3}
              title={"The simple bag"}
              price={"€300,-"}
          >
          </Product>
          <Product
              label={"New collection"}
              img={bag4}
              title={"The trendy bag"}
              price={"€150,-"}
          >
          </Product>
        </main>
        <footer>
          <Tile
              title={"The brand"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem cumque dignissimos enim
              incidunt
              iusto labore laborum minus molestias porro possimus, unde vel velit. Consequatur eum
              exercitationem
              illo, inventore laborum minus nam nihil, nostrum porro praesentium tempore temporibus vero
              voluptatem?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem cumque dignissimos enim
              incidunt
              iusto labore laborum minus molestias porro possimus, unde vel velit. Consequatur eum
              exercitationem
              illo, inventore laborum minus nam nihil, nostrum porro praesentium tempore temporibus vero
              voluptatem?</p>
          </Tile>
          <Tile
              img={brand}
              imgDescription={"Brand image"}
          />
          <Tile
              img={story}
              imgDescription={"Our story"}
          />
          <Tile
              title={"Our story"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem cumque dignissimos enim
              incidunt
              iusto labore laborum minus molestias porro possimus, unde vel velit. Consequatur eum
              exercitationem
              illo, inventore laborum minus nam nihil, nostrum porro praesentium tempore temporibus vero
              voluptatem?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem cumque dignissimos enim
              incidunt
              iusto labore laborum minus molestias porro possimus, unde vel velit. Consequatur eum
              exercitationem
              illo, inventore laborum minus nam nihil, nostrum porro praesentium tempore temporibus vero
              voluptatem?</p>
          </Tile>
        </footer>
      </>
  );
}

export default App;
