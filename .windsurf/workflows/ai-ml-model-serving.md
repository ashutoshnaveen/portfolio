---
description: Build a mini vLLM-style model serving infrastructure project for AI/ML portfolio
---

# AI/ML Project: Model Serving Infrastructure

Build a production-quality LLM inference server inspired by vLLM. This project bridges distributed systems expertise with ML — directly relevant to roles at Anthropic, Google, Meta.

**Working agreement**: Ashutosh studies the theory; Cascade implements. All conceptual decisions and architecture choices go through Ashutosh first.

---

## Phase 1: Foundation (Weekend 1)

### Theory to Study First
- Transformer inference basics (autoregressive decoding, token generation)
- KV-cache: why it exists, how it grows with sequence length
- Batching strategies: static vs continuous/dynamic batching
- Read: vLLM paper "Efficient Memory Management for Large Language Model Serving with PagedAttention"

### Implementation
1. **Scaffold the repo** `model-serving-infra` (or chosen name):
   - Python project with proper structure (src/, tests/, benchmarks/)
   - Dependencies: `torch`, `transformers`, `fastapi`, `uvicorn`, `asyncio`
   - README with architecture overview and goals
   - `.gitignore`, `requirements.txt`, `Makefile`

2. **Basic inference server**:
   - Load a small model (GPT-2 or TinyLlama)
   - Single-request synchronous inference via FastAPI endpoint
   - `POST /generate` with prompt, max_tokens, temperature
   - Measure baseline latency and throughput

3. **Decision checkpoint** ⚠️: Which model to use as default (GPT-2 124M vs TinyLlama 1.1B vs other)?

---

## Phase 2: KV-Cache & Continuous Batching (Weekend 2)

### Theory to Study First
- PagedAttention (vLLM's core innovation)
- Continuous batching vs static batching (Orca paper)
- Memory management: pre-allocation vs dynamic allocation
- Prefill vs decode phases in LLM inference

### Implementation
4. **KV-cache management**:
   - Implement basic KV-cache storage and reuse
   - Track memory usage per request
   - Implement cache eviction when memory is full

5. **Continuous batching engine**:
   - Request queue with async handling
   - Batch scheduler: group requests, run prefill/decode together
   - Allow new requests to join an in-flight batch
   - Measure throughput improvement vs naive approach

6. **Decision checkpoint** ⚠️: PagedAttention-style block allocation vs simpler contiguous cache?

---

## Phase 3: Advanced Features (Weekend 3)

### Theory to Study First
- Speculative decoding
- Quantization basics (INT8, INT4, GPTQ, AWQ)
- Load balancing strategies for model replicas
- Streaming token generation (SSE)

### Implementation
7. **Streaming responses**:
   - Server-Sent Events (SSE) for token-by-token streaming
   - `POST /generate/stream` endpoint

8. **Request scheduling & priorities**:
   - Priority queue (premium vs standard requests)
   - Request timeout and cancellation
   - Graceful handling of OOM scenarios

9. **Quantization support** (optional):
   - INT8 inference option
   - Compare latency/quality tradeoffs

10. **Metrics & observability**:
    - Prometheus-style metrics: latency (p50/p95/p99), throughput (tokens/sec), queue depth, cache hit rate
    - `/metrics` endpoint

---

## Phase 4: Polish & Portfolio (Weekend 3-4)

11. **Benchmarking suite**:
    - Compare: naive (no batching) vs static batching vs continuous batching
    - Generate charts (matplotlib/plotly)
    - Write up results in README

12. **Documentation**:
    - Architecture diagram (draw.io or Mermaid)
    - Design decisions document
    - How to run, benchmark, and extend

13. **Docker support**:
    - Dockerfile for easy deployment
    - docker-compose with optional GPU support

14. **Add to portfolio site**:
    - Add project card to `src/components/Projects.jsx`
    - GitHub link, tech tags, description, architecture diagram
    - Link to live demo if deployed

15. **Commit and push portfolio changes**

---

## Key Concepts Glossary

| Concept | Why It Matters |
|---------|---------------|
| **KV-Cache** | Avoids recomputing attention for previous tokens; key to fast inference |
| **Continuous Batching** | Allows new requests to join mid-batch; massive throughput gain |
| **PagedAttention** | Manages KV-cache like virtual memory pages; reduces waste |
| **Prefill vs Decode** | Prefill processes full prompt at once; decode generates one token at a time |
| **Speculative Decoding** | Use small model to draft, large model to verify; speeds up generation |

---

## All Planned AI/ML Projects (Future)

| # | Project | Status | Effort |
|---|---------|--------|--------|
| 1 | Model Serving Infrastructure | 🔧 Active | 2-3 weekends |
| 2 | Distributed Training Benchmark (DDP/DeepSpeed/FSDP) | Planned | 2 weekends |
| 3 | Fault-Tolerant Training Orchestrator | Planned | 2 weekends |
| 4 | RAG Pipeline with Evaluation | Planned | 1-2 weekends |
| 5 | Fine-tune Small Model (LoRA/QLoRA) | Planned | 1 weekend |
