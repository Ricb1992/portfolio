<template>
  <div class="w-full">
    <form
      action="https://www.riccardobasso.com/wp-json/contact-form-7/v1/contact-forms/87/feedback"
      method="post"
    >
      <input type="hidden" name="_wpcf7" value="87" />
      <input type="hidden" name="_wpcf7_version" value="5.4" />
      <input type="hidden" name="_wpcf7_locale" value="en_US" />
      <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f87-p87-o1" />
      <input type="hidden" name="_wpcf7_container_post" value="0" />
      <div class="md:flex items-start md:-mx-2">
        <div class="md:w-1/2 mb-6 md:px-2 md:mb-0">
          <label for="your-name" class="block">Nome</label>
          <input
            id="your-name"
            type="text"
            name="your-name"
            class="p-2 rounded-md border border-bianco w-full"
          />
        </div>
        <div class="md:w-1/2 md:px-2">
          <label for="your-email" class="block">E-mail</label>
          <input
            id="your-email"
            type="email"
            name="your-email"
            class="p-2 rounded-md border border-bianco w-full"
          />
        </div>
      </div>
      <div class="md:mt-0 mt-8">
        <label for="your-messagge" class="block">Messaggio</label>

        <textarea
          name="your-message"
          id="your-message"
          class="block w-full p-2 rounded-md border border-bianco min-h-[200px]"
        ></textarea>
      </div>
      <button
        type="submit"
        class="mt-8 px-8 py-3 rounded-xl inline-block bg-blu border-2 border-blu text-bianco hover:bg-transparent hover:text-blu transition-all duration-300"
      >
        Invia messaggio
      </button>
    </form>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const isFormSubmissionError = (response) => {
  return response.code && response.code !== 200;
};

const formSubmissionHandler = (event) => {
  event.preventDefault();

  const formElement = event.target,
    { action, method } = formElement,
    body = new FormData(formElement);

  // Log form data
  for (let [key, value] of body.entries()) {
    console.log(`${key}: ${value}`);
  }

  fetch(action, {
    method,
    body,
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(JSON.stringify(error));
        });
      }
      return response.json();
    })
    .then((response) => {
      if (isFormSubmissionError(response)) {
      }
      console.log("Form submitted successfully:", response);
    })
    .catch((error) => {
      console.error("Form submission error:", error);
    });
};

const normalizeGravityFormsResponse = (response) => {
  const isSuccess = response.is_valid;
  const message = isSuccess
    ? stripHtml(response.confirmation_message)
    : "C'è stato un problema nell'invio del form. Riprova più tardi.";
  const validationError = isSuccess
    ? {}
    : Object.fromEntries(
        Object.entries(response.validation_messages).map(([key, value]) => [
          `input_${key}`,
          value,
        ])
      );

  return {
    isSuccess,
    message,
    validationError,
  };
};

onMounted(() => {
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", formSubmissionHandler);
});
</script>
