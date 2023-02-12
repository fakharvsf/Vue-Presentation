# essentials

## Project setup

```


# npm
npm install
```

### Compiles and hot-reloads for development

```

# npm
npm run dev

```

### Compiles and minifies for production

```


# npm
npm run build

```

### Lints and fixes files

```

# npm
npm run lint

```

# Vue.js

# **What is Vue?[#](https://vuejs.org/guide/introduction.html#what-is-vue)**

Vue (like **view**) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript

# **Single-File Components[#](https://vuejs.org/guide/introduction.html#single-file-components)**

In most build-tool-enabled Vue projects, we author Vue components using an HTML-like file format called **Single-File Component** (also known as `*.vue` files, abbreviated as **SFC**). A Vue SFC, as the name suggests, encapsulates the component's logic (JavaScript), template (HTML), and styles (CSS) in a single file.

```jsx
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

### **Options API[#](https://vuejs.org/guide/introduction.html#options-api)**

With Options API, we define a component's logic using an object of options such as `data`, `methods`, and `mounted`. Properties defined by options are exposed on `this` inside functions, which points to the component instance:

```jsx
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

---

# ****Creating a Vue Application****

## ****The application instance****

```jsx
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
})
app.mount('#app')
```

## Hierarchy

App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
├─ TodoClearButton
└─ TodoStatistics

# **Template Syntax**

Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data. All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

- ****Text Interpolation****
    
    The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces):
    
    ```jsx
    <span>Message: {{ msg }}</span>
    ```
    
- **Raw HTML**
    
    ```jsx
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    ```
    
- **Attribute Bindings[#](https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings)**
    
    Mustaches cannot be used inside HTML attributes. Instead, use a **`[v-bind` directive](https://vuejs.org/api/built-in-directives.html#v-bind)**:
    
    ```jsx
    <div v-bind:id="dynamicId"></div>
    <div :id="dynamicId"></div>
    ```
    
- **********************Expression only[#](https://vuejs.org/guide/essentials/template-syntax.html#using-javascript-expressions)**
    
    ```jsx
    <!-- this is a statement, not an expression: -->
    {{ var a = 1 }}
    
    <!-- flow control won't work either, use ternary expressions -->
    {{ if (ok) { return message } }}
    ```
    

# Directives

![vue-js-directives.png](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/vue-js-directives.png)

```jsx
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

```jsx
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

![directive.69c37117.png](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/directive.69c37117.png)

# ****Reactivity Fundamentals[#](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactivity-fundamentals)**

```jsx
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment()
  }
}

<!-- IN Template-->

<button @click="increment">{{ count }}</button>
```

- **Computed:**
    
    **Computed** properties are used to handle complex calculations of information that need to be displayed in the view
    
    For complex logic that includes reactive data, it is recommended to use a **computed property**. 
    
    ```jsx
    <template>
      <div class="hello">
        <h1>{{ count }}</h1>
      </div>
    </template>
    
    <script>
    export default {
      name: "HelloWorld", 
      data() {
        return {
          shopNumber: 2
        }
      },
      computed: {
        count() {
          return 'The shop number is ' + this.shopNumber 
        }
      }
    };
    </script>
    ```
    
    ## Methods vs Computed
    
    ![methods-vs-computed-properties.png](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/methods-vs-computed-properties.png)
    
    ![43411490401e656e7c0037284ce6a53029d0acda.jpeg](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/43411490401e656e7c0037284ce6a53029d0acda.jpeg)
    
    - **methods:** they need to run every time to check if the values used withing have changed because they don’t know since they are not **cached based on their reactive dependencies.**
    - **computed properties:** they know if the values used in the function changed so they don’t need to run every time to check. So they run only once and then watch the values so they are **cached based on their reactive dependencies.**
    - A computed property will only re-evaluate when some of its reactive dependencies have changed.
    
    ## Class ****Binding to Objects[#](https://vuejs.org/guide/essentials/class-and-style.html#binding-to-objects)**
    
    ```jsx
    data() {
      return {
        isActive: true,
        hasError: false
      }
    }
    
    <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></div>
    ```
    
    ```jsx
    <div class="static active"></div>
    ```
    
    Can also be used with computed Property
    
    ```jsx
    data() {
      return {
        isActive: true,
        error: null
      }
    },
    computed: {
      classObject() {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    }
    
    <div :class="classObject"></div>
    ```
    

## ****Vue Conditional Rendering****

- The directive `v-if` is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.

```jsx
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

- Another option for conditionally displaying an element is the `v-show` directive. The usage is largely the same. The difference is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` only toggles the `display` CSS property of the element.

```jsx
<p class="error-message" v-show="password.length < 6">
      The password must be at least 6 characters
    </p>
```

![https://dltqhkoxgn1gx.cloudfront.net/img/posts/v-if-vs-v-show-vue-conditional-rendering-2.gif](https://dltqhkoxgn1gx.cloudfront.net/img/posts/v-if-vs-v-show-vue-conditional-rendering-2.gif)

## ****v-if vs. v-show****

![Screenshot 2023-02-12 160414.png](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/Screenshot_2023-02-12_160414.png)

![xp3g6aduezd71.webp](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/xp3g6aduezd71.webp)

## 2-way binding for inputs

 

```jsx
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
```

## Life CycleHooks

![https://vuejs.org/assets/lifecycle.16e4c08e.png](https://vuejs.org/assets/lifecycle.16e4c08e.png)

# **Components Basics[#](https://vuejs.org/guide/essentials/component-basics.html#components-basics)**

Components allow us to split the UI into independent and reusable pieces, and think about each piece in isolation. It's common for an app to be organized into a tree of nested components:

![https://vuejs.org/assets/components.7fbb3771.png](https://vuejs.org/assets/components.7fbb3771.png)

## ****Passing Props[#](https://vuejs.org/guide/essentials/component-basics.html#passing-props)**

```jsx
<!-- BlogPost.vue Component -->
<script>
export default {
  props: ['title']
}
</script>

<template>
  <h4>{{ title }}</h4>
</template>

<!-- Passing Data to component from Parent -->

<!-- Static data -->
<BlogPost title="My journey with Vue" />
<BlogPost title="Blogging with Vue" />
<BlogPost title="Why Vue is so fun" />

<!-- Dynamic Data -->
<BlogPost
  v-for="post in posts"
  :key="post.id"
  :title="post.title"
 />
```

![image1.png](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/image1.png)

```jsx
<!-- BlogPost.vue, omitting <script> -->
<!-- BlogPost.vue -->
<script>
export default {
  props: ['title'],
  emits: ['enlarge-text']
}
</script>
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<!-- Parent Receiving data as Event -->

<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />
```

## Props Issues

![Screenshot 2023-02-12 164123.png](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/Screenshot_2023-02-12_164123.png)

---

---

# Pinia

Pinia is the closest word to *piña*(*pineapple* in Spanish) that is a valid package name. A pineapple is in reality a group of individual flowers that join together to create a multiple fruit. Similar to stores, each one is born individually, but they are all connected at the end. It's also a delicious tropical fruit indigenous to South America.

![Screenshot 2023-02-12 164046.png](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/Screenshot_2023-02-12_164046.png)

![1_tgkInNrezsK6yplRI5odBQ.png](Vue%20js%2062d6ebce56b64677b6deb01394e08d4d/1_tgkInNrezsK6yplRI5odBQ.png)

```jsx
// Utilities in Pinia Store
import { defineStore } from "pinia";

// Utilities in Pinia Store 1
export const useModalStore = defineStore("modal", {
  state: () => ({
    isOpen: false,
    //
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});

// Utilities in Pinia Store 2
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    //
  }),
  getters: {
    hiddenClass(state) {
      return state.user;
    },
  },
  actions: {
    getData() {
      fetch("https://dummyjson.com/products/3")
        .then((res) => res.json())
        .then((response) => {
          // console.log(state.user);
          console.log(response);
          this.user = response;
          console.log("🚀 ~ file: modal.js:34 ~ .then ~ this.user", this.user);
        });
    },
  },
});
```

```jsx
<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useModalStore } from "@/store/modal";
import { useUserStore } from "@/store/modal";
export default {
  name: "listing",
  data() {
    return {};
  },
  mounted() {
    this.getUserData();
  },
  computed: {
    ...mapStores(useUserStore, useModalStore),
    ...mapState(useModalStore, ["hiddenClass", "isOpen"]),
    ...mapState(useUserStore, ["hiddenClass"]),
    ...mapActions(useUserStore, ["getData"]),
  },
  methods: {
    getUserData() {
      this.userStore.getData();
    },
  },
};
</script>
```

# Routes

Vue Router **helps link between the browser's URL/History and Vue's components allowing for certain paths to render whatever view is associated with it**

### **`router-link`[#](https://router.vuejs.org/guide/#router-link)**

Note how instead of using regular `a` tags, we use a custom component `router-link` to create links. This allows Vue Router to change the URL without reloading the page, handle URL generation as well as its encoding. We will see later how to benefit from these features.

### **`router-view`[#](https://router.vuejs.org/guide/#router-view)**

`router-view` will display the component that corresponds to the url. You can put it anywhere to adapt it to your layout.

```jsx
// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

```

## ****Dynamic Route Matching with Params[#](https://router.vuejs.org/guide/essentials/dynamic-matching.html#dynamic-route-matching-with-params)**

```jsx
// these are passed to `createRouter`
const routes = [
  // dynamic segments start with a colon
  { path: '/users/:id', component: User },
]

//Access id in route

this.$route.params.id or **$route.params.id**
```

### Nested Routes

```jsx
/user/johnny/profile                     /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

```jsx
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```

### Navigation

| Declarative | Programmatic |
| --- | --- |
| <router-link :to="..."> | router.push(...) |

### Route Guard

```jsx
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

## ****Route Meta Fields****

Sometimes, you might want to attach arbitrary information to routes like： transition names, or roles to control who can access the route, etc. This can be achieved through the `meta`
 property which accepts an object of properties and can be accessed on the route location and navigation guards. You can define `meta`
 properties like this:

```jsx
const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // only authenticated users can create posts
        meta: { requiresAuth: true }
      },
      {
        path: ':id',
        component: PostsDetail,
        // anybody can read a post
        meta: { requiresAuth: false }
      }
    ]
  }
]const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // only authenticated users can create posts
        meta: { requiresAuth: true }
      },
      {
        path: ':id',
        component: PostsDetail,
        // anybody can read a post
        meta: { requiresAuth: false }
      }
    ]
  }
]
```

```jsx
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})
```