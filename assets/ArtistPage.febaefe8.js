import { Q as QSpinnerDots, a as QInfiniteScroll } from "./QInfiniteScroll.9812d8b3.js";
import { Q as QPage } from "./QPage.007b4877.js";
import { B as BaseAPI, bH as RequiredError, J as JSONApiResponse, bI as AlbumReadDtoFromJSON, bJ as CircleReadDtoFromJSON, a3 as _export_sfc, a4 as defineComponent, r as ref, a5 as QueueController, aM as ApiConfigProvider, bi as AlbumApi, a6 as useRouter, o as onMounted, aH as onDeactivated, aI as onActivated, a8 as openBlock, a9 as createBlock, aa as withCtx, d as createVNode, ac as createBaseVNode, ao as createElementBlock, aD as renderList, F as Fragment, a7 as unref } from "./index.d1c6beb9.js";
import { A as AlbumCard } from "./AlbumCard.e13f89c4.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.bea5d164.js";
import "./QImg.79e57122.js";
class CircleApi extends BaseAPI {
  async getCircleAlbumsByIdRaw(requestParameters, initOverrides) {
    if (requestParameters.id === null || requestParameters.id === void 0) {
      throw new RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getCircleAlbumsById.");
    }
    const queryParameters = {};
    if (requestParameters.start !== void 0) {
      queryParameters["start"] = requestParameters.start;
    }
    if (requestParameters.limit !== void 0) {
      queryParameters["limit"] = requestParameters.limit;
    }
    const headerParameters = {};
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/entity/circle/{id}/albums`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => jsonValue.map(AlbumReadDtoFromJSON));
  }
  async getCircleAlbumsById(requestParameters, initOverrides) {
    const response = await this.getCircleAlbumsByIdRaw(requestParameters, initOverrides);
    return await response.value();
  }
  async getCircleAlbumsByNameRaw(requestParameters, initOverrides) {
    if (requestParameters.name === null || requestParameters.name === void 0) {
      throw new RequiredError("name", "Required parameter requestParameters.name was null or undefined when calling getCircleAlbumsByName.");
    }
    const queryParameters = {};
    if (requestParameters.start !== void 0) {
      queryParameters["start"] = requestParameters.start;
    }
    if (requestParameters.limit !== void 0) {
      queryParameters["limit"] = requestParameters.limit;
    }
    const headerParameters = {};
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/entity/circle/{name}/albums`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => jsonValue.map(AlbumReadDtoFromJSON));
  }
  async getCircleAlbumsByName(requestParameters, initOverrides) {
    const response = await this.getCircleAlbumsByNameRaw(requestParameters, initOverrides);
    return await response.value();
  }
  async getCircleByIdRaw(requestParameters, initOverrides) {
    if (requestParameters.id === null || requestParameters.id === void 0) {
      throw new RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getCircleById.");
    }
    const queryParameters = {};
    const headerParameters = {};
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/entity/circle/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => CircleReadDtoFromJSON(jsonValue));
  }
  async getCircleById(requestParameters, initOverrides) {
    const response = await this.getCircleByIdRaw(requestParameters, initOverrides);
    return await response.value();
  }
  async getCircleByNameRaw(requestParameters, initOverrides) {
    if (requestParameters.name === null || requestParameters.name === void 0) {
      throw new RequiredError("name", "Required parameter requestParameters.name was null or undefined when calling getCircleByName.");
    }
    const queryParameters = {};
    const headerParameters = {};
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/entity/circle/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => CircleReadDtoFromJSON(jsonValue));
  }
  async getCircleByName(requestParameters, initOverrides) {
    const response = await this.getCircleByNameRaw(requestParameters, initOverrides);
    return await response.value();
  }
  async getCirclesRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    if (requestParameters.start !== void 0) {
      queryParameters["start"] = requestParameters.start;
    }
    if (requestParameters.limit !== void 0) {
      queryParameters["limit"] = requestParameters.limit;
    }
    const headerParameters = {};
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/entity/circle`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => jsonValue.map(CircleReadDtoFromJSON));
  }
  async getCircles(requestParameters = {}, initOverrides) {
    const response = await this.getCirclesRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
const _hoisted_1 = { class: "q-gutter-md row" };
const _hoisted_2 = { class: "row justify-center q-my-md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArtistPage",
  setup(__props) {
    const infScroll = ref();
    const queueController = QueueController.getInstance();
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
    new AlbumApi(apiConfig);
    const circleApi = new CircleApi(apiConfig);
    const router = useRouter();
    const displayAlbums = ref([]);
    const { setColors } = usePageContainerBgStyleStore();
    let currArtist;
    function loadArtist(start, limit) {
      let artist = router.currentRoute.value.params.artist;
      const isId = /^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$/.test(artist);
      if (isId) {
        return circleApi.getCircleAlbumsById({
          id: artist,
          start,
          limit
        });
      }
      return circleApi.getCircleAlbumsByName({
        name: artist,
        start,
        limit
      });
    }
    function onLoad(index, done) {
      loadArtist(index * 50, 50).then((resp) => {
        var _a;
        if (resp.length === 0) {
          (_a = infScroll.value) == null ? void 0 : _a.stop();
          done();
        }
        displayAlbums.value.push(...resp);
        done();
      });
    }
    onMounted(async () => {
      var _a;
      let artist = router.currentRoute.value.params.artist;
      if (artist !== currArtist) {
        currArtist = artist;
        (_a = infScroll.value) == null ? void 0 : _a.setIndex(0);
        displayAlbums.value.length = 0;
      }
      displayAlbums.value.push(...await loadArtist(0, 50));
    });
    onDeactivated(() => {
      var _a;
      (_a = infScroll.value) == null ? void 0 : _a.stop();
    });
    onActivated(async () => {
      var _a, _b, _c, _d;
      let artist = router.currentRoute.value.params.artist;
      if (artist !== currArtist) {
        currArtist = artist;
        (_a = infScroll.value) == null ? void 0 : _a.setIndex(0);
        displayAlbums.value.length = 0;
        displayAlbums.value.push(...await loadArtist(0, 50));
      }
      (_b = infScroll.value) == null ? void 0 : _b.resume();
      if (queueController.currentlyPlaying !== void 0) {
        const color = (_d = (_c = queueController.currentlyPlaying.album) == null ? void 0 : _c.thumbnail) == null ? void 0 : _d.colors;
        if (color) {
          setColors(color);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { padding: "" }, {
        default: withCtx(() => [
          createVNode(unref(QInfiniteScroll), {
            class: "row items-start q-gutter-md flex",
            onLoad,
            offset: 300,
            ref_key: "infScroll",
            ref: infScroll
          }, {
            loading: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QSpinnerDots, {
                  color: "primary",
                  size: "40px"
                })
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(displayAlbums.value, (album, index) => {
                  return openBlock(), createBlock(AlbumCard, {
                    key: index,
                    "album-info": album
                  }, null, 8, ["album-info"]);
                }), 128))
              ])
            ]),
            _: 1
          }, 512)
        ]),
        _: 1
      });
    };
  }
});
var ArtistPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ArtistPage.vue"]]);
export { ArtistPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aXN0UGFnZS5mZWJhZWZlOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9hcGlzL0NpcmNsZUFwaS50cyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9BcnRpc3RQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7XG4gIEFsYnVtUmVhZER0byxcbiAgQ2lyY2xlUmVhZER0byxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7XG4gICAgQWxidW1SZWFkRHRvRnJvbUpTT04sXG4gICAgQWxidW1SZWFkRHRvVG9KU09OLFxuICAgIENpcmNsZVJlYWREdG9Gcm9tSlNPTixcbiAgICBDaXJjbGVSZWFkRHRvVG9KU09OLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdldENpcmNsZUFsYnVtc0J5SWRSZXF1ZXN0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIGxpbWl0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldENpcmNsZUFsYnVtc0J5TmFtZVJlcXVlc3Qge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBsaW1pdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRDaXJjbGVCeUlkUmVxdWVzdCB7XG4gICAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRDaXJjbGVCeU5hbWVSZXF1ZXN0IHtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0Q2lyY2xlc1JlcXVlc3Qge1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIGxpbWl0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlQXBpIGV4dGVuZHMgcnVudGltZS5CYXNlQVBJIHtcblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGdldENpcmNsZUFsYnVtc0J5SWRSYXcocmVxdWVzdFBhcmFtZXRlcnM6IEdldENpcmNsZUFsYnVtc0J5SWRSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPEFycmF5PEFsYnVtUmVhZER0bz4+PiB7XG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy5pZCA9PT0gbnVsbCB8fCByZXF1ZXN0UGFyYW1ldGVycy5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcnVudGltZS5SZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciByZXF1ZXN0UGFyYW1ldGVycy5pZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldENpcmNsZUFsYnVtc0J5SWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy5zdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3N0YXJ0J10gPSByZXF1ZXN0UGFyYW1ldGVycy5zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy5saW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2xpbWl0J10gPSByZXF1ZXN0UGFyYW1ldGVycy5saW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvZW50aXR5L2NpcmNsZS97aWR9L2FsYnVtc2AucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHJlcXVlc3RQYXJhbWV0ZXJzLmlkKSkpLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlKHJlc3BvbnNlLCAoanNvblZhbHVlKSA9PiBqc29uVmFsdWUubWFwKEFsYnVtUmVhZER0b0Zyb21KU09OKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZ2V0Q2lyY2xlQWxidW1zQnlJZChyZXF1ZXN0UGFyYW1ldGVyczogR2V0Q2lyY2xlQWxidW1zQnlJZFJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPEFycmF5PEFsYnVtUmVhZER0bz4+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldENpcmNsZUFsYnVtc0J5SWRSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudmFsdWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBnZXRDaXJjbGVBbGJ1bXNCeU5hbWVSYXcocmVxdWVzdFBhcmFtZXRlcnM6IEdldENpcmNsZUFsYnVtc0J5TmFtZVJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8QXJyYXk8QWxidW1SZWFkRHRvPj4+IHtcbiAgICAgICAgaWYgKHJlcXVlc3RQYXJhbWV0ZXJzLm5hbWUgPT09IG51bGwgfHwgcmVxdWVzdFBhcmFtZXRlcnMubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcnVudGltZS5SZXF1aXJlZEVycm9yKCduYW1lJywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RQYXJhbWV0ZXJzLm5hbWUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRDaXJjbGVBbGJ1bXNCeU5hbWUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy5zdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3N0YXJ0J10gPSByZXF1ZXN0UGFyYW1ldGVycy5zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy5saW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2xpbWl0J10gPSByZXF1ZXN0UGFyYW1ldGVycy5saW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvZW50aXR5L2NpcmNsZS97bmFtZX0vYWxidW1zYC5yZXBsYWNlKGB7JHtcIm5hbWVcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhyZXF1ZXN0UGFyYW1ldGVycy5uYW1lKSkpLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlKHJlc3BvbnNlLCAoanNvblZhbHVlKSA9PiBqc29uVmFsdWUubWFwKEFsYnVtUmVhZER0b0Zyb21KU09OKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZ2V0Q2lyY2xlQWxidW1zQnlOYW1lKHJlcXVlc3RQYXJhbWV0ZXJzOiBHZXRDaXJjbGVBbGJ1bXNCeU5hbWVSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxBcnJheTxBbGJ1bVJlYWREdG8+PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRDaXJjbGVBbGJ1bXNCeU5hbWVSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudmFsdWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBnZXRDaXJjbGVCeUlkUmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBHZXRDaXJjbGVCeUlkUmVxdWVzdCwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8cnVudGltZS5BcGlSZXNwb25zZTxDaXJjbGVSZWFkRHRvPj4ge1xuICAgICAgICBpZiAocmVxdWVzdFBhcmFtZXRlcnMuaWQgPT09IG51bGwgfHwgcmVxdWVzdFBhcmFtZXRlcnMuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IHJ1bnRpbWUuUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVxdWVzdFBhcmFtZXRlcnMuaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRDaXJjbGVCeUlkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL2VudGl0eS9jaXJjbGUve2lkfWAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHJlcXVlc3RQYXJhbWV0ZXJzLmlkKSkpLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlKHJlc3BvbnNlLCAoanNvblZhbHVlKSA9PiBDaXJjbGVSZWFkRHRvRnJvbUpTT04oanNvblZhbHVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZ2V0Q2lyY2xlQnlJZChyZXF1ZXN0UGFyYW1ldGVyczogR2V0Q2lyY2xlQnlJZFJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPENpcmNsZVJlYWREdG8+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldENpcmNsZUJ5SWRSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudmFsdWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBnZXRDaXJjbGVCeU5hbWVSYXcocmVxdWVzdFBhcmFtZXRlcnM6IEdldENpcmNsZUJ5TmFtZVJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8Q2lyY2xlUmVhZER0bz4+IHtcbiAgICAgICAgaWYgKHJlcXVlc3RQYXJhbWV0ZXJzLm5hbWUgPT09IG51bGwgfHwgcmVxdWVzdFBhcmFtZXRlcnMubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcnVudGltZS5SZXF1aXJlZEVycm9yKCduYW1lJywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RQYXJhbWV0ZXJzLm5hbWUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRDaXJjbGVCeU5hbWUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvZW50aXR5L2NpcmNsZS97bmFtZX1gLnJlcGxhY2UoYHske1wibmFtZVwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHJlcXVlc3RQYXJhbWV0ZXJzLm5hbWUpKSksXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5KU09OQXBpUmVzcG9uc2UocmVzcG9uc2UsIChqc29uVmFsdWUpID0+IENpcmNsZVJlYWREdG9Gcm9tSlNPTihqc29uVmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBnZXRDaXJjbGVCeU5hbWUocmVxdWVzdFBhcmFtZXRlcnM6IEdldENpcmNsZUJ5TmFtZVJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPENpcmNsZVJlYWREdG8+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldENpcmNsZUJ5TmFtZVJhdyhyZXF1ZXN0UGFyYW1ldGVycywgaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGdldENpcmNsZXNSYXcocmVxdWVzdFBhcmFtZXRlcnM6IEdldENpcmNsZXNSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPEFycmF5PENpcmNsZVJlYWREdG8+Pj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy5zdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3N0YXJ0J10gPSByZXF1ZXN0UGFyYW1ldGVycy5zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy5saW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2xpbWl0J10gPSByZXF1ZXN0UGFyYW1ldGVycy5saW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvZW50aXR5L2NpcmNsZWAsXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5KU09OQXBpUmVzcG9uc2UocmVzcG9uc2UsIChqc29uVmFsdWUpID0+IGpzb25WYWx1ZS5tYXAoQ2lyY2xlUmVhZER0b0Zyb21KU09OKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZ2V0Q2lyY2xlcyhyZXF1ZXN0UGFyYW1ldGVyczogR2V0Q2lyY2xlc1JlcXVlc3QgPSB7fSwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8QXJyYXk8Q2lyY2xlUmVhZER0bz4+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldENpcmNsZXNSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudmFsdWUoKTtcbiAgICB9XG5cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxxLWluZmluaXRlLXNjcm9sbCBjbGFzcz1cInJvdyBpdGVtcy1zdGFydCBxLWd1dHRlci1tZCBmbGV4XCIgQGxvYWQ9XCJvbkxvYWRcIiA6b2Zmc2V0PVwiMzAwXCIgcmVmPVwiaW5mU2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWQgcm93XCI+XG4gICAgICAgIDxBbGJ1bUNhcmQgdi1mb3I9XCIoYWxidW0sIGluZGV4KSBpbiBkaXNwbGF5QWxidW1zXCIgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICA6YWxidW0taW5mbz1cImFsYnVtXCI+XG4gICAgICAgIDwvQWxidW1DYXJkPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bG9hZGluZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBxLW15LW1kXCI+XG4gICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHtBbGJ1bUFwaSwgQWxidW1SZWFkRHRvLCBDaXJjbGVBcGl9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7b25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFsYnVtQ2FyZCBmcm9tICdjb21wb25lbnRzL0FsYnVtQ2FyZC52dWUnO1xuaW1wb3J0IHtRSW5maW5pdGVTY3JvbGx9IGZyb20gJ3F1YXNhcic7XG5cbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHtRdWV1ZUNvbnRyb2xsZXJ9IGZyb20gJ3NyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXInO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJ2dWUtcm91dGVyXCI7XG4gIGltcG9ydCB7YmlBd2FyZH0gZnJvbSBcIkBxdWFzYXIvZXh0cmFzL2Jvb3RzdHJhcC1pY29uc1wiO1xuXG5jb25zdCBpbmZTY3JvbGwgPSByZWY8UUluZmluaXRlU2Nyb2xsPigpO1xuXG5jb25zdCBxdWV1ZUNvbnRyb2xsZXIgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKTtcbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XG5jb25zdCBjaXJjbGVBcGkgPSBuZXcgQ2lyY2xlQXBpKGFwaUNvbmZpZyk7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBkaXNwbGF5QWxidW1zID0gcmVmPEFsYnVtUmVhZER0b1tdPihbXSlcblxuY29uc3QgeyBzZXRDb2xvcnMgfSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxubGV0IGN1cnJBcnRpc3Q6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gbG9hZEFydGlzdChzdGFydDogbnVtYmVyLCBsaW1pdDogbnVtYmVyKTogUHJvbWlzZTxBbGJ1bVJlYWREdG9bXT4ge1xuICAvLyBDaGVjayBpZiB0aGUgcGFyYW0gaXMgYW4gdXVpZCBvciBhcnRpc3QgbmFtZVxuICBsZXQgYXJ0aXN0ID0gPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hcnRpc3Q7XG5cbiAgY29uc3QgaXNJZCA9IC9eWzAtOWEtZkEtRl17OH1cXFxcYi1bMC05YS1mQS1GXXs0fVxcXFxiLVswLTlhLWZBLUZdezR9XFxcXGItWzAtOWEtZkEtRl17NH1cXFxcYi1bMC05YS1mQS1GXXsxMn0kLy50ZXN0KGFydGlzdCk7XG4gIGlmIChpc0lkKSB7XG4gICAgcmV0dXJuIGNpcmNsZUFwaS5nZXRDaXJjbGVBbGJ1bXNCeUlkKHtcbiAgICAgIGlkOiBhcnRpc3QsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBsaW1pdDogbGltaXRcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaXJjbGVBcGkuZ2V0Q2lyY2xlQWxidW1zQnlOYW1lKHtcbiAgICBuYW1lOiBhcnRpc3QsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGxpbWl0OiBsaW1pdFxuICB9KVxufVxuXG5mdW5jdGlvbiBvbkxvYWQoaW5kZXg6IG51bWJlciwgZG9uZTogKHN0b3A/OiBib29sZWFuKSA9PiB2b2lkKSB7XG4gIGxvYWRBcnRpc3QoaW5kZXggKiA1MCwgNTApLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAocmVzcC5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZlNjcm9sbC52YWx1ZT8uc3RvcCgpO1xuICAgICAgZG9uZSgpO1xuICAgIH1cblxuICAgIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5yZXNwKTtcbiAgICBkb25lKCk7XG4gIH0pXG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGxldCBhcnRpc3QgPSA8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLmFydGlzdDtcbiAgaWYgKGFydGlzdCAhPT0gY3VyckFydGlzdCkge1xuICAgIGN1cnJBcnRpc3QgPSBhcnRpc3Q7XG4gICAgaW5mU2Nyb2xsLnZhbHVlPy5zZXRJbmRleCgwKTtcbiAgICBkaXNwbGF5QWxidW1zLnZhbHVlLmxlbmd0aCA9IDA7XG4gIH1cbiAgZGlzcGxheUFsYnVtcy52YWx1ZS5wdXNoKC4uLmF3YWl0IGxvYWRBcnRpc3QoMCwgNTApKVxufSlcblxub25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gIGluZlNjcm9sbC52YWx1ZT8uc3RvcCgpO1xufSlcblxub25BY3RpdmF0ZWQoYXN5bmMgKCkgPT4ge1xuICBsZXQgYXJ0aXN0ID0gPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hcnRpc3Q7XG4gIGlmIChhcnRpc3QgIT09IGN1cnJBcnRpc3QpIHtcbiAgICBjdXJyQXJ0aXN0ID0gYXJ0aXN0O1xuICAgIGluZlNjcm9sbC52YWx1ZT8uc2V0SW5kZXgoMCk7XG4gICAgZGlzcGxheUFsYnVtcy52YWx1ZS5sZW5ndGggPSAwO1xuICAgIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5hd2FpdCBsb2FkQXJ0aXN0KDAsIDUwKSk7XG4gIH1cblxuICBpbmZTY3JvbGwudmFsdWU/LnJlc3VtZSgpO1xuICBpZiAocXVldWVDb250cm9sbGVyLmN1cnJlbnRseVBsYXlpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbG9yID0gcXVldWVDb250cm9sbGVyLmN1cnJlbnRseVBsYXlpbmcuYWxidW0/LnRodW1ibmFpbD8uY29sb3JzO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgc2V0Q29sb3JzKGNvbG9yKTtcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJydW50aW1lLkJhc2VBUEkiLCJydW50aW1l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
