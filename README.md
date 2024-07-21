# React SSR & SSG with Elysia

This was an experiment to learn a bit more about SSR and SSG with React without frameworks. That said, it was harder than I expected. This project is not finished and probably never will be.

## Known issues

- first time updating the `url` will cause this beautiful error:

```json
{"name":"Error","message":"A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."}
```

- using anything related with `react-router-dom` will cause this error:

```json
{"name":"TypeError","message":"Right side of assignment cannot be destructured"}
```

or this one:

```json
{"name":"Error","message":"useNavigate() may be used only in the context of a <Router> component."}
```

that's it.
