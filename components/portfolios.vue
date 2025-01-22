<template>
  <div class="bg-bianco pt-24" id="portfolio">
    <div class="sticky-container">
      <h2
        class="lg:text-9xl text-5xl text-center font-extrabold text-blu pb-24"
      >
        Progetti
      </h2>
    </div>
    <div class="portfolio-cards lg:px-3vw px-6vw">
      <portfolio-Card
        v-for="(post, index) in posts"
        :key="post.id"
        :data="post"
        :index="index"
      ></portfolio-Card>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, nextTick } from "vue";

const posts = ref([]);

const fetchPageData = async (retries = 3) => {
  const apiEndpoint =
    "https://www.riccardobasso.com//wp-json/wp/v2/posts?_embed";

  try {
    const response = await axios.get(apiEndpoint);
    posts.value = response.data.map((post) => ({
      ...post,
      featured_media_url: post._embedded["wp:featuredmedia"]
        ? post._embedded["wp:featuredmedia"][0].source_url
        : "",
    }));
    await nextTick();
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying... (${3 - retries + 1})`);
      setTimeout(() => fetchPageData(retries - 1), 1000); // Retry after 1 second
    } else {
      console.error("Error fetching data from WordPress API:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  }
};

onMounted(() => {
  fetchPageData();
});
</script>

<style scoped>
.sticky-container {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 2em;
}

.portfolio-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
