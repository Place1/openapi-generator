/*
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import java.io.File;

import io.restassured.response.ResponseBody;
import org.openapitools.client.model.ModelApiResponse;
import org.openapitools.client.model.Pet;
import org.openapitools.client.ApiClient;
import org.openapitools.client.api.PetApi;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.ErrorLoggingFilter;
import org.junit.Before;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import static io.restassured.config.ObjectMapperConfig.objectMapperConfig;
import static io.restassured.config.RestAssuredConfig.config;
import static org.openapitools.client.GsonObjectMapper.gson;

/**
 * API tests for PetApi
 */
@Ignore
public class PetApiTest {

    private PetApi api;

    @Before
    public void createApi() {
        api = ApiClient.api(ApiClient.Config.apiConfig().reqSpecSupplier(
                () -> new RequestSpecBuilder().setConfig(config().objectMapperConfig(objectMapperConfig().defaultObjectMapper(gson())))
                        .addFilter(new ErrorLoggingFilter())
                        .setBaseUri("http://petstore.swagger.io:80/v2"))).pet();
    }

    /**
     * Invalid input
     */
    @Test
    public void shouldSee405AfterAddPet() {
        Pet pet = null;
        api.addPet()
                .body(pet).execute(r -> r.prettyPeek());
        // TODO: test validations
    }


    /**
     * Invalid pet value
     */
    @Test
    public void shouldSee400AfterDeletePet() {
        Long petId = null;
        String apiKey = null;
        api.deletePet()
                .petIdPath(petId).execute(r -> r.prettyPeek());
        // TODO: test validations
    }


    /**
     * successful operation
     */
    @Test
    public void shouldSee200AfterFindPetsByStatus() {
        List<String> status = null;
        api.findPetsByStatus()
                .statusQuery(status).execute(r -> r.prettyPeek());
        // TODO: test validations
    }

    /**
     * Invalid status value
     */
    @Test
    public void shouldSee400AfterFindPetsByStatus() {
        List<String> status = null;
        api.findPetsByStatus()
                .statusQuery(status).execute(r -> r.prettyPeek());
        // TODO: test validations
    }


    /**
     * successful operation
     */
    @Test
    public void shouldSee200AfterFindPetsByTags() {
        List<String> tags = null;
        api.findPetsByTags()
                .tagsQuery(tags).execute(r -> r.prettyPeek());
        // TODO: test validations
    }

    /**
     * Invalid tag value
     */
    @Test
    public void shouldSee400AfterFindPetsByTags() {
        List<String> tags = null;
        api.findPetsByTags()
                .tagsQuery(tags).execute(r -> r.prettyPeek());
        // TODO: test validations
    }


    /**
     * successful operation
     */
    @Test
    public void shouldSee200AfterGetPetById() {
        Long petId = null;
        api.getPetById()
                .petIdPath(petId).execute(r -> r.prettyPeek());
        // TODO: test validations
    }

    /**
     * Invalid ID supplied
     */
    @Test
    public void shouldSee400AfterGetPetById() {
        Long petId = null;
        api.getPetById()
                .petIdPath(petId).execute(r -> r.prettyPeek());
        // TODO: test validations
    }

    /**
     * Pet not found
     */
    @Test
    public void shouldSee404AfterGetPetById() {
        Long petId = null;
        api.getPetById()
                .petIdPath(petId).execute(r -> r.prettyPeek());
        // TODO: test validations
    }


    /**
     * Invalid ID supplied
     */
    @Test
    public void shouldSee400AfterUpdatePet() {
        Pet pet = null;
        api.updatePet()
                .body(pet).execute(r -> r.prettyPeek());
        // TODO: test validations
    }

    /**
     * Pet not found
     */
    @Test
    public void shouldSee404AfterUpdatePet() {
        Pet pet = null;
        api.updatePet()
                .body(pet).execute(r -> r.prettyPeek());
        // TODO: test validations
    }

    /**
     * Validation exception
     */
    @Test
    public void shouldSee405AfterUpdatePet() {
        Pet pet = null;
        api.updatePet()
                .body(pet).execute(r -> r.prettyPeek());
        // TODO: test validations
    }


    /**
     * Invalid input
     */
    @Test
    public void shouldSee405AfterUpdatePetWithForm() {
        Long petId = null;
        String name = null;
        String status = null;
        api.updatePetWithForm()
                .petIdPath(petId).execute(r -> r.prettyPeek());
        // TODO: test validations
    }


    /**
     * successful operation
     */
    @Test
    public void shouldSee200AfterUploadFile() {
        Long petId = null;
        String additionalMetadata = null;
        File file = null;
        api.uploadFile()
                .petIdPath(petId).execute(r -> r.prettyPeek());
        // TODO: test validations
    }

}