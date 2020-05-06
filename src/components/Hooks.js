const [scrollPosition, setscrollPosition] = useState(0);

const toggleNavScroll = useCallback(() => {
  let didScroll;
  let lastScrollTop = 0;
  let delta = 5;
  let navbarHeight = window.outerHeight;

  setscrollPosition(
    document.body.scrollTop || document.documentElement.scrollTop
  );

  if (Math.abs(lastScrollTop - scrollPosition) <= delta) return;

  if (scrollPosition > lastScrollTop && scrollPosition > navbarHeight) {
    header.classList.remove("nav-down");
    header.classList.add("nav-up");
  } else if (scrollPosition + window.height < document.body.clientHeight) {
    header.classList.remove("nav-up");
    header.classList.add("nav-down");
  }
  lastScrollTop = scrollPosition;
}, [setscrollPosition]);

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

useEffect(() => {
  let didScroll;
  window.scrollTo(0, 0);
  window.addEventListener("scroll", toggleNavScroll, false);
  window.addEventListener("scroll", function (event) {
    didScroll = true;
  });

  toggleNavScroll();

  return function cleanup() {
    window.removeEventListener("scroll", toggleNavScroll, false);
    window.removeEventListener("scroll", function (event) {
      didScroll = false;
    });
  };
}, [toggleNavScroll]);

// Usage
function App() {
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  // Add event listener using our hook
  useEventListener("mousemove", handler);

  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
}

// Hook
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}
