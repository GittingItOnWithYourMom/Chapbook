var games = document.getElementsByClassName('games')

function start_game(game) {
   if (game == 1){
      window.open('/carnival game/index.html')
   }
}

function FadeInSection(props) {
   const [isVisible, setVisible] = React.useState(true);
   const domRef = React.useRef();
   React.useEffect(() => {
     const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => setVisible(entry.isIntersecting));
     });
     observer.observe(domRef.current);
     return () => observer.unobserve(domRef.current);
   }, []);
   return (
     <div
       className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
       ref={domRef}
     >
       {props.children}
     </div>
   );
}